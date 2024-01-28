import Gallery from "../Gallery/Gallery";
import CtaButton from "./CtaButton";

const DrawerContent = ({ work }) => {
  const text = work.work_long_description;
  const list = text.split("/").length != 0 ? text.split("/") : [text];

  return (
    <div className=" flex flex-col h-full w-full">
      <div
        className=" flex flex-col rounded-2xl bg-center bg-contain bg-no-repeat duration-300  "
        key={work.work_id}
        // className={`carousel-slide  w-full h-64 p-4 duration-500 `}
      >
        <div className=" py-2 font-light rounded-md text-blackish/80 w-full lg:flex justify-evenly px-2">
          <div className="lg:w-[45%]">
            <Gallery />
          </div>
          <div className="lg:w-[45%]">
            <span className="font-light text">{work.work_date}</span>
            <h3
              id="family-custom"
              className=" my-4 font-light text-lg tracking-wider"
            >
              {work.work_short_description}
            </h3>
            <p className="font-light tracking-wide">{list[0]}</p>
            <ul>
              {list.length != 0 &&
                list.map((item, i) => {
                  if (i != 0 && i != list.length - 1)
                    return <li key={i}>{item}</li>;
                })}
            </ul>
            <h3>Tenés algo similar en mente?</h3>
            <CtaButton
              url={`/contactanos/${work.work_title}`}
              primary={true}
              work={work}
            >
              Contactanos
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DrawerContent;
