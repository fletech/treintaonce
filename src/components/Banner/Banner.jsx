import { BiSolidRightArrow } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoPaperclip } from "react-icons/go";
import { MdDoneAll, MdOutlineLocalShipping } from "react-icons/md";
import { content_layout } from "../../../lib/constants";
import { Subtitle } from "../Commons/Commons";

const Banner = () => {
  const getIcon = (key, { ...styles }) => {
    const icons = {
      0: <HiOutlineLightBulb key={key} className={styles.tw} />,
      2: <GoPaperclip key={key} className={styles.tw} />,
      4: <MdDoneAll key={key} className={styles.tw} />,
      6: <MdOutlineLocalShipping key={key} className={styles.tw} />,
    };
    return icons[`${key}`];
  };
  return (
    <section className="mt-16">
      <Subtitle text="Cómo trabajamos?" />
      <div className="grid grid-cols-11 w-full mt-8 md:min-h-[20vh] min-h-[30vh] ">
        {content_layout.banner.cards.map((card, i) =>
          i % 2 == 0 ? (
            <div
              key={i}
              className="relative card w-full col-span-2 flex justify-center items-center bg-bgHighlight  text-blackish font-light tracking-wider p-4 rounded-lg shadow-sm"
            >
              <div className="absolute top-4 left-4">
                {getIcon(i, { tw: "text-3xl text-primary" })}
              </div>
              <p className="w-full text-center text-xl">{card}</p>
            </div>
          ) : (
            <div
              key={i}
              className="flex w-full h-full items-center justify-center"
            >
              <BiSolidRightArrow className="text-primary/20" />
              <BiSolidRightArrow className="text-primary/30" />
              <BiSolidRightArrow className="text-primary/40" />
            </div>
          )
        )}
        {/* <div className="card w-full col-span-2 bg-red-400"></div>
      <div className="card w-full bg-red-200 place-items-center">
        <div className="flex w-auto h-full items-center justify-center">
          <BiSolidRightArrow />
          <BiSolidRightArrow />
          <BiSolidRightArrow />
        </div>
      </div>
      <div className="card w-full col-span-2 bg-red-400"></div>
      <div className="card w-full bg-red-200"></div>
      <div className="card w-full col-span-2 bg-red-400"></div>
      <div className="card w-full bg-red-200"></div>
      <div className="card w-full col-span-2 bg-red-400"></div> */}
      </div>
    </section>
  );
};
export default Banner;
