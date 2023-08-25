import { useEffect, useRef, useState } from "react";
import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";
import { isMobile } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";

import { getRandomColors } from "../../utils/getRandomColors";
import ProductDrawer from "./ProductDrawer";
import CtaButton from "../Commons/CtaButton";

const ProductGrid = ({
  customers,
  currentCategoriesIDs,
  categories,
  filteredWorks,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const [isProductShown, setIsProductShown] = useState(false);

  useEffect(() => {
    //currentCategoriesIDs array of IDs that shows the categories associated to the chosen product
    // what this fx does is give me the whole category object hooked by the ID. It will be always just a length of 1 since
    if (currentCategoriesIDs[0] != undefined) {
      let category_items = categories.filter(
        (item) => item.category_ID == currentCategoriesIDs[0]
      )[0];

      setCategory(category_items);
    }
  }, [currentCategoriesIDs, categories]);

  useEffect(() => {
    setIsProductShown(false);
    console.log(location.pathname.split("/"));
    if (
      location.pathname.split("/")[2] == "producto" &&
      location.pathname.split("/")[3] != "todos"
    ) {
      console.log(true);
      setIsProductShown(true);
    }
  }, [location]);

  const elementRef = useRef();

  return (
    <section
      className={`md:grid grid-cols-2 md:gap-4 carousel w-full h-auto py-2 flex justify-start overflow-x-scroll md:overflow-x-hidden overflow-y-scroll pr-2`}
    >
      {/* //PRODUCTO CARD fallback */}
      {filteredWorks.length == 0 && category.length != 0 && (
        <div
          className={`item w-auto h-auto flex flex-col justify-center items-center border-2 border-blackish/10 p-4 rounded-xl bg-bgHighlight/50 `}
        >
          <h2 className="my-4">Sin productos para mostrar</h2>
          <p className="">
            Pero te ayudamos a crear {category.category_name_article}{" "}
            {category.category_name} que necesites
          </p>
          <CtaButton status={showButton} setStatus={setShowButton} url="/">
            Dejanos tu consulta
          </CtaButton>
        </div>
      )}
      {/* // PRODUCTO CARD */}
      {filteredWorks.map((work, i) => {
        const customer = customers.filter(
          (customer) => customer.customer_ID == work.work_customer
        )[0];
        const colors = getRandomColors();

        const customer_logo =
          customer.customer_logo == 0
            ? `https://source.boringavatars.com/marble/240/?colors=${colors}`
            : customer.customer_logo;
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

            <Drawer.Root defaultOpen={isProductShown}>
              <Drawer.Trigger asChild>
                <Link
                  to={`/nuestros-productos/producto/${work.work_ID}&${work.work_title}`}
                >
                  <CtaButton
                    id={work.work_ID}
                    primary={true}
                    ref={elementRef}
                    url={`/nuestros-productos/producto/${work.work_ID}&${work.work_title}`}
                    asChild
                  >
                    Ver más
                  </CtaButton>
                  {/* <button className="text-primary font-normal  border-primary border-2 px-3 rounded-md hover:bg-primary hover:text-bgHighlight transition ease-out duration-500">
                    Ver más
                  </button> */}
                </Link>
              </Drawer.Trigger>

              <MyDrawer title={work.work_title}>
                <ProductDrawer work={work} />
              </MyDrawer>
            </Drawer.Root>
          </div>
        );
      })}
    </section>
  );
};
export default ProductGrid;
