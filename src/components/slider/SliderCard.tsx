import Image from "next/image";

export default function SliderCard({
  label,
  imagePath,
  description,
}: {
  label: string;
  imagePath: string;
  description: string;
}) {
  return (
    <article className="select-none flex flex-col justify-between min-h-52 md:h-64 bg-gray-100 p-5 rounded-xl min-w-[min(412px,_100%)] snap-start overflow-y-hidden">
      <div className="grid grid-cols-[60px_1fr] md:grid-cols-1 gap-6 items-center md:h-full content-between">
        <div className="pointer-events-none relative h-[60px] md:w-[80px] md:h-[80px]">
          <Image aria-hidden="true" alt="" fill src={imagePath} />
        </div>
        <h3 className="text-[22px]/[30px] md:text-[28px]/[36px]">{label}</h3>
      </div>
      <p className="text-[14px] md:text-[16px] md:invisible md:h-0">
        {description}
      </p>
    </article>
  );
}
