import Gallery from "../Gallery/Gallery";
import ContactSection from "../Hero/ContactSection";
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
            <div className="border-b-2 mt-10"></div>
            <div className="py-8 rounded-md">
              <p className="font-light mr-10 text-blackish">
                Tenés algo similar en mente?
              </p>
              <CtaButton
                url={`/contactanos/${work.work_title}`}
                primary
                work={work}
              >
                Contactanos
              </CtaButton>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-100 p-8 rounded-md mx-2">
          <p className="font-semibold mr-10 text-blackish">
            Tenés algo similar en mente?
          </p>
          <CtaButton
            url={`/contactanos/${work.work_title}`}
            primary
            work={work}
          >
            Contactanos
          </CtaButton>
        </div> */}
      </div>
    </div>
  );
};
export default DrawerContent;
