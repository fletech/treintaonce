import { useEffect, useMemo, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { Subtitle } from "../Commons/Commons";
import WorkBox from "./WorkBox";
import { isMobile } from "react-device-detect";
import { getRandomNumbers } from "../../utils/getRandomNumbers";

const WorksSection = ({ works }) => {
  const [first, second] = useMemo(() => getRandomNumbers(works), [works]);

  const [worksFiltered, setWorksFiltered] = useState();

  useEffect(() => {
    if (works) {
      const filtered = works.filter((work, i) => {
        if (i != first && i != second) {
          return works[i];
        }
      });

      setWorksFiltered(filtered);
    }
  }, [works]);

  return (
    <section className="pb-20 pt-[12vh] h-[70vh] md:h-[92vh]">
      <Subtitle text={"nuestros trabajos realizados"} />
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 h-full`}>
        {/* Caja de la izquierda */}
        <div className="border border-gray-200 bg-blackish/60 p-2 rounded shadow grid l:hidden">
          {worksFiltered && (
            <Carousel works={isMobile ? works : worksFiltered} />
          )}
        </div>

        {/* Caja de la derecha */}
        {!isMobile && (
          <div className="grid grid-rows-2 gap-4 ">
            {/* Primera caja interna */}
            <div className="bg-primary border border-gray-200 rounded shadow">
              {works && <WorkBox work={works[first]} />}
            </div>

            {/* Segunda caja interna */}
            <div className="bg-secondary border border-gray-200 rounded shadow">
              {works && <WorkBox work={works[second]} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
