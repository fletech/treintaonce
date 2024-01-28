import { motion } from "framer-motion";
import { Subtitle } from "../Commons/Commons";

import { useWindowSize } from "@uidotdev/usehooks";

const Loading = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  return (
    <motion.div
      initial={{ opacity: 0.8, scaleX: [1.5, 0.9, 1.5], scaleY: 1.2 }}
      animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleX: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pb-20 pt-[12vh] h-[70vh] md:h-[92vh]">
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.1 }}
        >
          <Subtitle text={"Cargando..."} />
        </motion.div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 h-full`}>
          {/* Caja de la izquierda */}
          <div className="border border-gray-200 bg-blackish/60 p-2 rounded shadow grid l:hidden"></div>

          {/* Caja de la derecha */}
          {!isMobile && (
            <div className="grid grid-rows-2 gap-4 ">
              {/* Primera caja interna */}
              <div className="bg-primary border border-gray-200 rounded shadow">
                <div className="carousel-wrapper w-full flex p-2 h-full ">
                  <div className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto ">
                    <div className="bg-bgHighlight inline-block p-2 font-light">
                      <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="font-light">Cargando...</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segunda caja interna */}
              <div className="bg-secondary border border-gray-200 rounded shadow">
                <div className="carousel-wrapper w-full flex p-2 h-full ">
                  <div className="w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-300 h-auto ">
                    <div className="bg-bgHighlight inline-block p-2 font-light">
                      <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="font-light">Cargando...</h3>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
export default Loading;
