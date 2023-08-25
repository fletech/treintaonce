import { forwardRef } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const CtaButton = forwardRef(function CtaButton({ children, ...props }, ref) {
  const { asChild, group, primary, url } = props;

  const Button = () => {
    return (
      <button
        className={`relative group  w-full flex justify-center items-center border-2 px-6 py-2  rounded-full hover: font-normal hover:font-normal ${
          primary ? "border-primary" : ""
        } ${!group && "mt-4"}`}
        // onMouseOver={() => setStatus(true)}
        // onMouseLeave={() => setStatus(false)}
      >
        <p className="  text-primary text-sm   ">{children}</p>

        <BsArrowRightShort className="absolute right-2 top-[50%]  text-primary hidden group-hover:flex group-hover:-translate-y-[50%]" />
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
