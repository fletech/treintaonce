import { forwardRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDetailsContext } from "../../../context/useDetailsContext";

const CtaButton = forwardRef(function CtaButton({ children, ...props }, ref) {
  const { setSelectedProduct, openMobileAside } = useDetailsContext();
  const { asChild, group, primary, url, work } = props;

  const Button = () => {
    return (
      <button
        //TODO: Ver si está bien ocultar el relative cuando está abierto el filter de categorias. Porque es
        //un componente global
        className={`${
          openMobileAside ? "" : "relative"
        } group  w-max flex justify-center items-center border-2 px-6 py-2  rounded-full hover:font-normal hover:bg-secondary  transition-colors ${
          primary ? "border-secondary" : ""
        } ${!group && "mt-4"}`}
        onClick={() => setSelectedProduct(work)}
      >
        <p className="  text-secondary text-sm  group-hover:text-white  group-hover:font-bold">
          {children}
        </p>

        <BsArrowRightShort className="absolute right-2 top-[50%]  text-primary hidden group-hover:flex group-hover:text-white group-hover:-translate-y-[50%] group-hover: " />
      </button>
    );
  };
  return !asChild ? (
    <Link to={url ? url : "#"} ref={ref}>
      <Button />
    </Link>
  ) : (
    <Button />
  );
});
export default CtaButton;
