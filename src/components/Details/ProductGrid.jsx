import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";
import { useState } from "react";
import { isMobile } from "react-device-detect";
// import { isMobile } from "react-device-detect";

const ProductGrid = ({ filteredWorks, customers }) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={` carousel w-auto h-auto py-2 flex justify-start overflow-x-scroll`}
    >
      {filteredWorks.map((work, i) => {
        const customer = customers.filter(
          (customer) => customer.customer_ID == work.work_customer
        )[0];

        return (
          <div
            key={work.work_ID}
            className={`item w-min h-auto flex flex-col justify-start items-center border-2 border-gray-200 p-4 rounded-xl bg-bgHighlight/50  ${
              i == 0 ? "" : "ml-4"
            }`}
          >
            <div className="flex w-full h-full justify-start flex-col">
              <h2 className=" font-semibold text-xl text-blackish/80">
                {work.work_title}
              </h2>
              <p className="font-light text-blackish/80 my-2">
                {work.work_description}
              </p>
              <div className="flex items-center h-full">
                <img
                  src={customer.customer_logo}
                  className="w-[30px] h-auto rounded-full mr-2"
                />
                <p className="font-normal text-blackish/60">
                  {customer.customer_name}
                </p>
              </div>
            </div>
            <div
              className={`${
                isMobile ? "w-[70vw]" : "min-w-[300px]"
              }  grow h-full  my-4 mx-full flex flex-col justify-between items-center`}
              style={
                {
                  // backgroundImage: `url(${work.work_image_cover})`,
                }
              }
            >
              <img
                src={work.work_image_cover}
                className="max-w-[200px] w-full"
              />
            </div>

            <Drawer.Root>
              <Drawer.Trigger asChild>
                <button className="text-primary font-normal  border-primary border-2 px-3 rounded-md hover:bg-primary hover:text-bgHighlight transition ease-out duration-500">
                  Ver más
                </button>
              </Drawer.Trigger>

              <MyDrawer></MyDrawer>
            </Drawer.Root>
          </div>
        );
      })}
    </section>
  );
};
export default ProductGrid;
