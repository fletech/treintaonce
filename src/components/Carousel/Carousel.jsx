import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGoogleSheetData } from "../../../lib/api";

import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = ({ works }) => {
  // const states = useContext(Context);

  // const { works } = states;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");

  const updateSlide = (index) => {
    return setCurrentSlide(works[index]);
  };

  const prevSlide = (current) => {
    setDirection("right");
    setLastIndex(current);
    setCurrentIndex((prevIndex) => {
      return prevIndex == 0 ? works.length - 1 : prevIndex - 1;
    });
  };

  const nextSlide = (current) => {
    setDirection("left");
    setLastIndex(current);
    setCurrentIndex((prevIndex) => {
      return prevIndex === works.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    console.log(lastIndex);
  }, [currentIndex, lastIndex]);

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     updateSlide(currentIndex);
  //   }, 200); // Cambia el slide automáticamente cada 5 segundos

  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, []);

  return (
    works && (
      <div className="relative p-0">
        <div className="carousel-wrapper w-full flex  h-full ">
          <div
            style={{
              backgroundImage: `url(${works[currentIndex].work_image_cover})`,
            }}
            className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 z-0 "
            key={works[currentIndex].work_id}
            // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
          >
            <div className="bg-white inline-block p-2">
              <h3>{works[currentIndex].work_title}</h3>
            </div>
          </div>
        </div>
        <button
          className="prev-btn absolute top-1/2 left-5 transform -translate-y-1/2 text-3xl rounded-full p-2 bg-primary/40 text-white font-black cursor-pointer"
          onClick={() => prevSlide(currentIndex)}
        >
          <BsChevronLeft />

          {/* <BsChevronCompactLeft /> */}
        </button>
        <button
          className="next-btn absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl rounded-full p-2 bg-primary/40 text-white cursor-pointer"
          onClick={() => nextSlide(currentIndex)}
        >
          <BsChevronRight />
          {/* <BsChevronCompactRight /> */}
        </button>
        <div className="absolute flex -bottom-[7vh] justify-center py-2 w-full">
          {works.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex == currentIndex ? "text-primary" : "text-blackish/30"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Carousel;
