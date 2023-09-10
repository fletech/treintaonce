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
    <section className="mt-16 overflow-x-auto">
      <Subtitle text="Cómo trabajamos?" />
      <div className="flex w-full mt-8  items-stretch ">
        {content_layout.banner.cards.map((card, i) => (
          <div className="flex w-full " key={i}>
            <div className="relative card w-full flex flex-col items-center bg-bgHighlight  text-blackish font-light tracking-wider p-3 rounded-lg shadow-sm h-auto">
              <div className="my-2">
                {getIcon(i, { tw: "text-2xl text-primary" })}
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-sm text-center ">{card.text}</p>
                {
                  card.contact && (
                    <CtaButton
                      status={showButton}
                      setStatus={setShowButton}
                      url="/"
                    >
                      Consultar
                    </CtaButton>
                  )

                  // <button
                  //   className="relative flex justify-center items-center border-2 px-6 py-2 mt-4 rounded-full hover: font-normal hover:font-normal"
                  //   onMouseOver={() => setShowButton(true)}
                  //   onMouseLeave={() => setShowButton(false)}
                  // >
                  //   <p className="  text-primary text-sm   ">Consultar</p>
                  //   {showButton && (
                  //     <BsArrowRightShort className="absolute right-2 top-[10px] text-primary" />
                  //   )}
                  // </button>
                }
              </div>
            </div>
            {content_layout.banner.cards.length != i + 1 && (
              <div className="flex w-1/4 h-auto items-center justify-center">
                {/* <BiSolidRightArrow className="text-primary/20" /> */}
                <BiSolidRightArrow className="text-primary/30" />
                <BiSolidRightArrow className="text-primary/40" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Banner;
