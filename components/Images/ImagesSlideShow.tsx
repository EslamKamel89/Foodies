"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const ImagesSlideShow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] flex items-center justify-center overflow-hidden md:h-full">
      {images.map((m, index) => {
        const isActive = index === currentImageIndex;
        return (
          <div
            key={index}
            className={`
              absolute transition-all duration-900 ease-out 
              ${
                isActive
                  ? "opacity-100 scale-100 z-20"
                  : "opacity-30 scale-[0.33] z-10"
              }
            `}
          >
            <Image
              src={m.image}
              alt={m.alt}
              className="object-cover rounded-xl shadow-md"
              priority={isActive}
            />
          </div>
        );
      })}

      <div className="absolute bottom-4 flex gap-2 justify-center">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 
            ${
              idx === currentImageIndex ? "bg-accent scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlideShow;
