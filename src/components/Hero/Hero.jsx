import { useState } from "react";

import { fetchGoogleSheetData } from "../../../lib/api";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../Carousel/Carousel";
import WorkBox from "./WorkBox";

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
            {works && <WorkBox work={works[1]} />}
          </div>

          {/* Segunda caja interna */}
          <div className="bg-secondary border border-gray-200 rounded shadow">
            {works && <WorkBox work={works[2]} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
