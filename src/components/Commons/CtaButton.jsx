import { forwardRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDetailsContext } from "../../../context/useDetailsContext";

const CtaButton = forwardRef(function CtaButton({ children, ...props }, ref) {
  const { setSelectedProduct } = useDetailsContext();
  const { asChild, group, primary, url, work } = props;

  const Button = () => {
    return (
      <button
        className={`relative group  w-full flex justify-center items-center border-2 px-6 py-2  rounded-full hover:font-normal hover:bg-primary  transition-colors ${
          primary ? "border-primary" : ""
        } ${!group && "mt-4"}`}
        onClick={() => setSelectedProduct(work)}
        // onMouseOver={() => setStatus(true)}
        // onMouseLeave={() => setStatus(false)}
      >
        <p className="  text-primary text-sm  group-hover:text-white ">
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
