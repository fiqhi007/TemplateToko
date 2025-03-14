import { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const images = [
  "https://via.placeholder.com/300/FF5733/FFFFFF?text=1",
  "https://via.placeholder.com/300/33FF57/FFFFFF?text=2",
  "https://via.placeholder.com/300/3357FF/FFFFFF?text=3",
  "https://via.placeholder.com/300/F1C40F/FFFFFF?text=4",
];

const Carouser = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 }); // Mulai dari posisi awal
  }, [controls]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-5">
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
  );
};

export default Carouser;
