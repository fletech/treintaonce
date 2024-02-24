import { Drawer } from "vaul";

import { Link, useNavigate } from "react-router-dom";

import { useDetailsContext } from "../../../context/useDetailsContext";

import CtaButton from "./CtaButton";
import { useWindowSize } from "@uidotdev/usehooks";
import Gallery from "../Gallery/Gallery";
import { useEffect, useState } from "react";
import {} from "react-device-detect";

const CustomDrawer = ({ work, elementRef }) => {
  const {
    isProductShown,
    selectedProduct,
    setSelectedProduct,
    setIsProductShown,
    setDrawerClosed,
  } = useDetailsContext();
  const [contactClicked, setContactCliked] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const navigate = useNavigate();
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const title = work.work_title;
  const text = work.work_long_description;
  const list = text.split("/").length != 0 ? text.split("/") : [text];

  const contactHandler = () => {
    setContactCliked(true);
    navigate(`/contactanos/${work.work_title}`);
    if (isIOS) window.location.reload();
  };
  useEffect(() => {
    if (!isProductShown && contactClicked) {
      setContactCliked(false);
    }
  }, [isProductShown, contactClicked]);
  useEffect(() => {
    let os = null;
    let clientStrings = { s: "iOS", r: /(iPhone|iPad|iPod)/ };
    if (clientStrings.r.test(window.navigator.userAgent)) {
      os = clientStrings.s;
      setIsIOS(true);
    }
  });
  return (
    work && (
      <Drawer.Root
        // defaultOpen={isProductShown && selectedProduct.work_ID == work.work_ID}
        open={isProductShown && selectedProduct.work_ID == work.work_ID}
        onOpenChange={(value) => {
          setIsProductShown(value);
          setDrawerClosed(!value);

          if (value) setSelectedProduct(work);
        }}
      >
        <Drawer.Trigger asChild className="z-100">
          <Link
            to={`/nuestros-productos/producto/${
              work.work_ID + "&" + work.work_title
            }`}
          >
            <CtaButton
              id={work.work_ID}
              primary={true}
              ref={elementRef}
              work={work}
              asChild
            >
              Ver más
            </CtaButton>
          </Link>
        </Drawer.Trigger>

        <Drawer.Portal react-aria>
          <Drawer.Overlay className="absolute inset-0 bg-blackish/40 backdrop-blur-sm" />
          <Drawer.Content className="bg-bgHighlight flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-2 right-2 top-1 md:top-10 md:left-32 lg:left-32 md:right-32 lg:right-32 pt-4">
            <div className="p-4 bg-bgHighlight rounded-t-[10px] flex-1 overflow-auto">
              {isMobile && (
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-primary mb-8" />
              )}
              {!isMobile && (
                <div className="flex mx-auto w-full mb-8">
                  <p className="text-blackish/70 mx-auto flex items-center font-light">
                    Presiona
                    <span className="mx-2 rounded bg-white/40 text-[10px] font-normal text-blackish border-[0.3px] border-blackish/60 py-1 px-[6px] shadow">
                      ESC
                    </span>
                    para cerrar
                  </p>
                </div>
              )}
              <div className="w-full mx-auto flex flex-col justify-center items-center">
                <h2 className=" font-bold text-2xl my-2 w-full text-blackish/80 uppercase text-center mb-10">
                  {title}
                </h2>

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
                        <span className="font-light text">
                          {work.work_date}
                        </span>
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

                          <Drawer.Close
                            onClick={contactHandler}
                            // onClick={() =>
                            //   navigate(`/contactanos/${work.work_title}`)
                            // }
                          >
                            {/* <Link
                              to={`/contactanos/${work.work_title}`}
                              onClick={contactHandler}
                            > */}
                            <CtaButton asChild primary work={work}>
                              Contactanos
                            </CtaButton>
                            {/* </Link> */}
                          </Drawer.Close>
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
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    )
  );
};
export default CustomDrawer;
