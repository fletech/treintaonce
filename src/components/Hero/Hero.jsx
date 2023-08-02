import { useState } from "react";

import { fetchGoogleSheetData } from "../../../lib/api";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../Carousel/Carousel";

const HeroSection = () => {
  const [works, setWorks] = useState();

  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 3000,
    onSuccess: setWorks,
  });
  return (
    <section className="pb-20 pt-[12vh] h-[70vh] md:h-[92vh]">
      <h1 className="font-bold text-2xl uppercase mb-10 text-primary">
        Lo que hacemos
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-2 gap-3 h-full ">
        {/* Caja de la izquierda */}
        <div className="border border-gray-200 bg-blackish p-2 rounded shadow grid l:hidden">
          {works && <Carousel works={works} />}
        </div>

        {/* Caja de la derecha */}
        <div className="grid grid-rows-2 gap-3 ">
          {/* Primera caja interna */}
          <div className="bg-primary border border-gray-200 rounded shadow">
            {works && (
              <div className="carousel-wrapper w-full flex p-2 h-full ">
                <div
                  style={{
                    backgroundImage: `url(${works[1].work_image_cover})`,
                  }}
                  className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto "
                  key={works[1].work_id}
                  // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
                >
                  <div className="bg-white inline-block p-2">
                    <h3>{works[1].work_title}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Segunda caja interna */}
          <div className="bg-secondary border border-gray-200 rounded shadow">
            {works && (
              <div className="carousel-wrapper w-full flex p-2 h-full ">
                <div
                  style={{
                    backgroundImage: `url(${works[2].work_image_cover})`,
                  }}
                  className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto "
                  key={works[2].work_id}
                  // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
                >
                  <div className="bg-white inline-block p-2">
                    <h3>{works[2].work_title}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
