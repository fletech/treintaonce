import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";
import { useState } from "react";
import { isMobile } from "react-device-detect";
// import { isMobile } from "react-device-detect";

const ProductGrid = ({ filteredWorks }) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={` carousel w-full h-auto flex py-2 items-baseline justify-start overflow-x-scroll`}
    >
      {filteredWorks.map((work) => (
        <div
          key={work.work_ID}
          className="item w-auto h-full self-stretch justify-self-stretch flex flex-col justify-between items-center border-2 border-gray-200 mx-4 p-4 rounded-xl  "
        >
          <div className="flex w-full h-full justify-center flex-col">
            <p className="grow">{work.work_title}</p>
            <p className="grow">{work.work_description}</p>
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
            <img src={work.work_image_cover} className="max-w-[200px] w-full" />
          </div>

          <Drawer.Root>
            <Drawer.Trigger asChild onClick={() => setOpen(true)}>
              <button className="text-primary font-normal  border-primary border-2 px-3 rounded-md hover:bg-primary hover:text-bgHighlight transition ease-out duration-500">
                Ver más
              </button>
            </Drawer.Trigger>

            <MyDrawer setOpen={setOpen}></MyDrawer>
          </Drawer.Root>
        </div>
      ))}
    </section>
  );
};
export default ProductGrid;
