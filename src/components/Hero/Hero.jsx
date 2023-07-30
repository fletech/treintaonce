import { useState, useEffect } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { fetchGoogleSheetData } from "../../../lib/api";
import { useQuery } from "@tanstack/react-query";

// const HeroSection = () => {
//   return (
//     <div className="bg-blue-100 p-8 flex h-[50vh]">
//       <div className="w-1/2 pr-4 h-full">
//         {/* Contenido de la mitad izquierda */}
//         <div className="bg-white p-4 rounded shadow h-full">Card 1</div>
//       </div>
//       <div className="w-1/2 pl-4 h-full">
//         {/* Contenido de la mitad derecha */}
//         <div className="bg-white p-4 rounded shadow h-1/2 mb-4">Card 2</div>
//         <div className="bg-white p-4 rounded shadow h-1/2">Card 3</div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// const HeroSection = () => {
//   return (
//     <div className="grid grid-cols-2 h-[50vh] gap-3">
//       {/* Caja de la izquierda */}
//       <div className="border-4 border-gray-500 h-full p-4 rounded shadow">
//         Contenido de la caja izquierda
//       </div>

//       {/* Caja de la derecha */}
//       <div className="grid grid-rows-2 gap-3 hidden">
//         {/* Primera caja interna */}
//         <div className="bg-red-500 p-4 rounded shadow">
//           Contenido de la primera caja interna
//         </div>

//         {/* Segunda caja interna */}
//         <div className="bg-green-500 p-4 rounded shadow">
//           Contenido de la segunda caja interna
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  // const states = useContext(Context);

  // const { works } = states;
  const [works, setWorks] = useState();

  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 3000,
    onSuccess: setWorks,
  });

  const slides = [
    { id: 1, color: "bg-red-500", content: "Slide 1" },
    { id: 2, color: "bg-blue-500", content: "Slide 2" },
    { id: 3, color: "bg-green-500", content: "Slide 3" },
  ];
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
        <div className="carousel-container overflow-hidden relative flex group">
          <div className="carousel-wrapper w-full flex p-8 ">
            <div
              style={{
                backgroundImage: `url(${works[currentIndex].work_image_cover})`,
              }}
              className="w-full rounded-2xl bg-center bg-cover duration-300 h-[80vh]"
              key={currentSlide.work_id}
              // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
            >
              {currentSlide.work_title}
            </div>
          </div>
        </div>

        <button
          className="prev-btn absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={() => prevSlide(currentIndex)}
        >
          <BsChevronCompactLeft />
        </button>
        <button
          className="next-btn absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={() => nextSlide(currentIndex)}
        >
          <BsChevronCompactRight />
        </button>
        <div className="absolute flex -bottom-10 justify-center py-2 w-full">
          {works.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex == currentIndex ? "text-red-400" : "text-gray-300"
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

export default HeroSection;
