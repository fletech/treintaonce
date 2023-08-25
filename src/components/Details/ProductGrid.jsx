import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";

import { isMobile } from "react-device-detect";
import { getRandomColors } from "../../utils/getRandomColors";
import { Link, useLocation } from "react-router-dom";
import ProductDrawer from "./ProductDrawer";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import CtaButton from "../Commons/CtaButton";

// import { isMobile } from "react-device-detect";

const ProductGrid = ({
  allSelected,
  customers,
  currentCategory,
  categories,
  filteredWorks,
}) => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const show_product =
    location.pathname.split("/")[2] == "producto" &&
    location.pathname.split("/")[3] != "todos";

  let category = [];
  useEffect(() => {
    if (currentCategory.length != 0) {
      // console.log(categories);
      category = categories.filter(
        (item) => item.category_ID == currentCategory
      )[0];
    }

    console.log(category.category_name_article);
  }, [currentCategory]);
  //TODO: arreglar este problema del render condicional.
  return (
    <section
      className={`md:grid grid-cols-2 md:gap-4 carousel w-full h-auto py-2 flex justify-start overflow-x-scroll md:overflow-x-hidden overflow-y-scroll pr-2`}
    >
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

            <Drawer.Root defaultOpen={show_product}>
              <Drawer.Trigger asChild>
                <Link
                  to={`/nuestros-trabajos/producto/${work.work_ID}&${work.work_title}`}
                >
                  <CtaButton
                    status={showButton}
                    setStatus={setShowButton}
                    url="/"
                    primary={true}
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
