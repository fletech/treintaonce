import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { MdDoneAll, MdOutlineLocalShipping } from "react-icons/md";
import { content_layout } from "../../../lib/constants";
import { Subtitle } from "../Commons/Commons";
import CtaButton from "../Commons/CtaButton";

const Banner = () => {
  const [showButton, setShowButton] = useState(false);
  const getIcon = (key, { ...styles }) => {
    const icons = {
      0: <HiOutlineLightBulb key={key} className={styles.tw} />,
      1: <GoPaperclip key={key} className={styles.tw} />,
      2: <MdDoneAll key={key} className={styles.tw} />,
      3: <BsBoxSeam key={key} className={styles.tw} />,
      4: <MdOutlineLocalShipping key={key} className={styles.tw} />,
    };
    return icons[`${key}`];
  };
  return (
    <section className="mt-16">
      <Subtitle text="Cómo trabajamos?" />
      <div className="lg:flex w-full mt-8  items-stretch overflow-x-auto">
        {content_layout.banner.cards.map((card, i) => (
          <div
            className="flex flex-col lg:flex-row w-full min-w-[200px] items-center"
            key={i}
          >
            <div className="relative card lg:w-full w-[70%] h-[200px] lg:h-[160px] flex flex-col items-center justify-center bg-bgHighlight  text-blackish font-light tracking-wider p-3 rounded-lg shadow-sm border-2 border-slate-100">
              <div className="my-2">
                {getIcon(i, { tw: "text-2xl text-secondary" })}
              </div>
              <div className="w-full h-auto flex flex-col justify-center items-center">
                <p className="text-sm text-center ">{card.text}</p>
                {card.contact && (
                  <CtaButton
                    status={showButton}
                    setStatus={setShowButton}
                    url="/contactanos"
                  >
                    Consultar
                  </CtaButton>
                )}
              </div>
            </div>
            {content_layout.banner.cards.length != i + 1 && (
              <div className="flex lg:flex-row flex-col w-1/4 lg:h-auto min-h-[100px] items-center justify-center">
                <BiSolidRightArrow className="text-secondary/40 rotate-90 lg:rotate-0" />
                <BiSolidRightArrow className="text-primary/50 rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Banner;
