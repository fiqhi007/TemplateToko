import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const images = [
  "https://via.placeholder.com/300/FF5733/FFFFFF?text=1",
  "https://via.placeholder.com/300/33FF57/FFFFFF?text=2",
  "https://via.placeholder.com/300/3357FF/FFFFFF?text=3",
  "https://via.placeholder.com/300/F1C40F/FFFFFF?text=4",
];

const Carouser = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Fungsi untuk menggeser ke slide berikutnya
  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fungsi untuk menggeser ke slide sebelumnya
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Efek untuk mengupdate posisi carousel saat currentIndex berubah
  useEffect(() => {
    const newX = -currentIndex * 320; // 320 adalah lebar card
    controls.start({ x: newX });
  }, [currentIndex, controls]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-5">
      {/* Container Carousel */}
      <div className="relative w-full max-w-3xl">
        {/* Tombol Panah Kiri */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          &#10094;
        </button>

        {/* Tombol Panah Kanan */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        >
          &#10095;
        </button>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab rounded-2xl border-4 border-black p-5 bg-white shadow-[5px_5px_0px_#000]"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -((images.length - 1) * 320), right: 0 }}
            style={{ x }}
            animate={controls}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[200px] rounded-lg border-4 border-black bg-gray-200 shadow-[5px_5px_0px_#000]"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indikator Titik */}
      <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carouser;