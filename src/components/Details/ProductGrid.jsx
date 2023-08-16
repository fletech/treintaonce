import { Drawer } from "vaul";
import { MyDrawer } from "../Commons/MyDrawer";
import { useState } from "react";
import { isMobile } from "react-device-detect";

const ProductGrid = ({ filteredWorks }) => {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={` carousel w-full flex pt-2 pb-4 items-stretch justify-start overflow-x-scroll`}
    >
      {filteredWorks.map((work) => (
        <div
          key={work.work_ID}
          className="item w-full max-w-[400px] grid place-items-start border-2 border-gray-200 mx-4 p-4 rounded-xl h-full max-h-[40vh]"
        >
          <div className="grid w-full">
            <p>{work.work_title}</p>
            <p>{work.work_description}</p>
          </div>
          <div
            className="w-full min-w-[300px] h-full min-h-[20vh] bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${work.work_image_cover})`,
            }}
          />
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
