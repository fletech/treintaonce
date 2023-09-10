import { Drawer } from "vaul";
import { DrawerPortal } from "./DrawerPortal";

import { Link } from "react-router-dom";

import { useDetailsContext } from "../../../context/useDetailsContext";

import DrawerContent from "./DrawerContent";
import CtaButton from "./CtaButton";

const CustomDrawer = ({ work, elementRef }) => {
  const {
    isProductShown,
    selectedProduct,
    setSelectedProduct,
    setIsProductShown,
    setDrawerClosed,
  } = useDetailsContext();
  return (
    work && (
      <Drawer.Root
        defaultOpen={isProductShown && selectedProduct.work_ID == work.work_ID}
        onOpenChange={(value) => {
          setIsProductShown(value);
          setDrawerClosed(!value);

          if (value) setSelectedProduct(work);
        }}
      >
        <Drawer.Trigger asChild>
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

        <DrawerPortal title={work.work_title}>
          <DrawerContent work={work} />
        </DrawerPortal>
      </Drawer.Root>
    )
  );
};
export default CustomDrawer;
