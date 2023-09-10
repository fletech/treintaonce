import { useRef } from "react";

import { isMobile } from "react-device-detect";

import { useDetailsContext } from "../../../context/useDetailsContext";

import { getRandomColors } from "../../utils/getRandomColors";

import CtaButton from "../Commons/CtaButton";
import CustomDrawer from "../Commons/CustomDrawer";

const avatar = () => {
  return `https://source.boringavatars.com/marble/240/?colors=${getRandomColors()}`;
};

const ProductGrid = () => {
  const { customers, filteredWorks, selectedCategory } = useDetailsContext();

  const elementRef = useRef();

  //console.log(selectedCategory);
  //console.log(selectedProduct);
  //console.log(location);

  return (
    <section
      className={`md:grid grid-cols-2 md:gap-4 carousel w-full h-auto py-2 flex justify-start overflow-x-scroll md:overflow-x-hidden overflow-y-scroll pr-2`}
    >
      {/* //PRODUCTO CARD fallback */}
      {filteredWorks.length == 0 && selectedCategory?.category_ID && (
        <div
          className={`item w-auto h-auto flex flex-col justify-center items-center border-2 border-blackish/10 p-4 rounded-xl bg-bgHighlight/50 `}
        >
          <h2 className="my-4">Sin productos para mostrar</h2>
          <p className="">
            Pero te ayudamos a crear {selectedCategory.category_name_article}{" "}
            {selectedCategory.category_name} que necesites
          </p>
          <CtaButton url="/">Dejanos tu consulta</CtaButton>
        </div>
      )}
      {/* // PRODUCTO CARD */}
      {filteredWorks.map((work, i) => {
        const customer = customers.filter(
          (customer) => customer.customer_ID == work.work_customer
        )[0];

        const customer_logo =
          customer.customer_logo == 0 ? avatar() : customer.customer_logo;
        return (
          <div
            key={work.work_ID}
            className={`item w-auto h-auto flex flex-col justify-start items-center border-2 border-blackish/10 p-4 rounded-xl bg-bgHighlight/50  ${
              i == 0 ? "" : "ml-4 md:ml-0"
            }`}
          >
            <div className="flex w-full h-full justify-start flex-col">
              <h2 className=" font-semibold text-xl text-blackish/80">
                {work.work_title}
              </h2>
              <p className="font-light text-blackish/80 my-2">
                {work.work_short_description}
              </p>
              <div className="flex items-center h-auto">
                <div className="bg-blackish/30  h-auto mr-2 rounded-full p-[1px]">
                  <img src={customer_logo} className="w-[30px] h-[30px] " />
                </div>
                <p className="font-normal text-blackish/60 ">
                  {customer.customer_name}
                </p>
              </div>
            </div>
            <div
              className={`${
                isMobile ? "w-[70vw]" : "min-w-[300px]"
              }  grow h-full  my-4 mx-full flex flex-col justify-between items-center `}
            >
              <img
                src={work.work_image_cover}
                className="max-w-[200px] w-full rounded-xl "
              />
            </div>
            <CustomDrawer work={work} elementRef={elementRef} />
          </div>
        );
      })}
    </section>
  );
};
export default ProductGrid;
