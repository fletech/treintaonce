import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";
import { useState } from "react";
// import { isMobile } from "react-device-detect";

const ProductGrid = ({ filteredWorks }) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={` carousel w-full flex pt-2 pb-2 items-baseline justify-start overflow-x-scroll`}
    >
      {filteredWorks.map((work) => (
        <div
          key={work.work_ID}
          className="item w-auto h-full self-stretch justify-self-stretch flex flex-col justify-between border-2 border-gray-200 mx-4 p-4 rounded-xl  "
        >
          <div className="grid w-full h-auto place-content-start">
            <p>{work.work_title}</p>
            <p>{work.work_description}</p>
          </div>
          <div
            className="min-w-[200px] h-auto bg-center bg-cover bg-no-repeat my-4 py-8"
            style={
              {
                // backgroundImage: `url(${work.work_image_cover})`,
              }
            }
          >
            <img src={work.work_image_cover} />
          </div>

          <Drawer.Root>
            <Drawer.Trigger asChild onClick={() => setOpen(true)}>
              <button>Ver más</button>
            </Drawer.Trigger>

            <MyDrawer setOpen={setOpen}>
              <p>Hello</p>
            </MyDrawer>
          </Drawer.Root>
        </div>
      ))}
    </section>
  );
};
export default ProductGrid;
