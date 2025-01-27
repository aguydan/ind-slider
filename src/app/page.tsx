import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-violet-dark grid grid-cols-1 md:grid-cols-[1fr_3fr] text-[26px] md:text-[34px] lg:text-[44px] md:border-b border-gray-500">
        <span className="border-b md:border-none border-gray-500">1.0</span>
        <span>Наши услуги</span>
      </h2>
      <Slider />
    </div>
  );
}
