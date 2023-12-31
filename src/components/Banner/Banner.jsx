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
      <div className="flex w-full mt-8  items-stretch overflow-x-auto">
        {content_layout.banner.cards.map((card, i) => (
          <div className="flex w-full min-w-[200px] " key={i}>
            <div className="relative card w-full flex flex-col items-center bg-bgHighlight  text-blackish font-light tracking-wider p-3 rounded-lg shadow-sm h-auto border-2 border-slate-100">
              <div className="my-2">
                {getIcon(i, { tw: "text-2xl text-secondary" })}
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
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
              <div className="flex w-1/4 h-auto items-center justify-center">
                <BiSolidRightArrow className="text-secondary/40" />
                <BiSolidRightArrow className="text-primary/50" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Banner;
