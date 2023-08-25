import { useState } from "react";
// import { isMobile } from "react-device-detect";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Carousel = ({ works }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex == 0 ? works.length - 1 : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === works.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    works && (
      <div className="relative p-0">
        <Link
          to={`/nuestros-productos/producto/${works[currentIndex].work_ID}&${works[currentIndex].work_title}`}
          className="bg-transparent carousel"
        >
          <div className={` w-full flex  h-full`}>
            <div
              style={{
                backgroundImage: `url(${works[currentIndex].work_image_cover})`,
              }}
              className="w-full bg-center bg-contain bg-no-repeat duration-300 z-200 "
            >
              <div className="bg-bgHighlight inline-block p-2 font-light rounded-md">
                <h3>{works[currentIndex].work_title}</h3>
              </div>
            </div>
          </div>
        </Link>
        <button
          className="prev-btn absolute top-1/2 left-5 transform -translate-y-1/2 text-3xl rounded-full p-2 bg-primary/40 text-white font-black cursor-pointer"
          onClick={() => prevSlide(currentIndex)}
        >
          <BsChevronLeft />
        </button>
        <button
          className="next-btn absolute top-1/2 right-5 transform -translate-y-1/2 text-3xl rounded-full p-2 bg-primary/40 text-white cursor-pointer"
          onClick={() => nextSlide(currentIndex)}
        >
          <BsChevronRight />
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
