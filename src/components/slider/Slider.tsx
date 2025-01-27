"use client";

import { UIEvent, useEffect, useRef, useState } from "react";
import SliderCard from "./SliderCard";
import { cards } from "@/constants/data";

export default function Slider() {
  const [activeButton, setActiveButton] = useState(0);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const cardWidth = useRef(0);
  const cardGap = 16;

  const snapPoints = useRef<number[]>([]);

  /* Инициализация cardWidth и snapPoints */

  useEffect(() => {
    if (sliderRef.current) {
      const slide = sliderRef.current.firstChild as Element | null;
      if (!slide) return;

      cardWidth.current = slide.clientWidth;

      snapPoints.current = cards.map((_, i, array) => {
        if (i === array.length - 1) {
          return cardWidth.current * (i - 1) + cardGap * (i - 1) + 60;
        }

        return cardWidth.current * i + cardGap * i;
      });
    }
  }, []);

  /* Обработчики событий */

  const handleScroll = (e: UIEvent) => {
    const scrollPos = e.currentTarget.scrollLeft;
    const points = snapPoints.current;

    for (let i = 0; i < points.length; i++) {
      const upper = scrollPos + 30;
      const lower = scrollPos - 30;

      if (points[i] >= lower && points[i] <= upper) {
        setActiveButton(i);
      }
    }
  };

  const handleClick = (i: number) => {
    sliderRef.current?.scrollTo({
      left: cardWidth.current * i + cardGap * i,
    });
  };

  let currentAnchor = 0;
  let ticking = false;

  const handleMouseMove = (e: Event) => {
    const event = e as MouseEvent;
    const target = event.currentTarget as Element;

    if (!ticking) {
      requestAnimationFrame(() => {
        target.scrollTo({
          left: target.scrollLeft + (event.clientX - currentAnchor) * 10 * -1,
        });

        currentAnchor = event.clientX;
        ticking = false;
      });

      ticking = true;
    }
  };

  const handleMouseUp = (e: Event) => {
    const target = e.currentTarget as HTMLElement;

    target.style.cursor = "auto";
    target.style.scrollSnapType = "x mandatory";
    target.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    currentAnchor = e.clientX;

    target.style.cursor = "grabbing";
    target.style.scrollSnapType = "none";
    target.addEventListener("mouseup", handleMouseUp, { once: true });
    target.addEventListener("mousemove", handleMouseMove);
  };

  const activeButtonClasses = (i: number) => {
    return activeButton === i
      ? "w-10 before:visible before:opacity-100"
      : "w-2 before:invisible before:opacity-0";
  };

  return (
    <section className="mt-8">
      <div
        role="navigation"
        className="flex gap-3 mt-8 mb-4 md:invisible md:mt-0 md:mb-0"
      >
        {cards.map((card, i) => (
          <button
            onClick={() => handleClick(i)}
            key={card.label}
            className={`${activeButtonClasses(i)} bg-gray-600 relative rounded-full h-2 md:before:invisible before:transition-all transition-all before:absolute before:bg-gray-900 before:block before:top-0 before:w-1/2 before:h-full before:rounded-full`}
          />
        ))}
      </div>
      <div
        onMouseDown={handleMouseDown}
        ref={sliderRef}
        onScroll={handleScroll}
        className={`overflow-x-scroll snap-x snap-mandatory scroll-smooth flex gap-${cardGap / 4}`}
      >
        {cards.map((card) => (
          <SliderCard key={card.label} {...card} />
        ))}
      </div>
    </section>
  );
}
