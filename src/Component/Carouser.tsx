import { useState, useRef } from "react";

const images = [
  "https://source.unsplash.com/400x250/?nature",
  "https://source.unsplash.com/400x250/?city",
  "https://source.unsplash.com/400x250/?space",
];

export default function Carouser() {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[400px] h-[250px] overflow-hidden rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full h-full object-cover" />
        ))}
      </div>
      {/* Tombol Navigasi */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white border-2 border-black px-3 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-y-0.5"
      >
        ⬅️
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white border-2 border-black px-3 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-y-0.5"
      >
        ➡️
      </button>
    </div>
  );
}
