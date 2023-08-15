import { BiSolidRightArrow } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { MdDoneAll, MdOutlineLocalShipping } from "react-icons/md";
import { content_layout } from "../../../lib/constants";
import { Subtitle } from "../Commons/Commons";

const Banner = () => {
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
      <div className="flex w-full mt-8  items-stretch ">
        {content_layout.banner.cards.map((card, i) => (
          <>
            <div
              key={i}
              className="relative card w-full flex flex-col justify-start items-center bg-bgHighlight  text-blackish font-light tracking-wider p-4 rounded-lg shadow-sm h-auto"
            >
              <div className="">
                {getIcon(i, { tw: "text-3xl text-primary" })}
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-lg">{card.text}</p>
              </div>
            </div>
            {content_layout.banner.cards.length != i + 1 && (
              <div
                key={i}
                className="flex w-1/2 h-auto items-center justify-center"
              >
                <BiSolidRightArrow className="text-primary/20" />
                <BiSolidRightArrow className="text-primary/30" />
                <BiSolidRightArrow className="text-primary/40" />
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  );
};
export default Banner;
