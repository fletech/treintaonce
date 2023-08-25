import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const CtaButton = ({ children, group, primary, status, setStatus, url }) => {
  return (
    <Link to={url ? url : "#"}>
      <button
        className={`relative flex justify-center items-center border-2 px-6 py-2  rounded-full hover: font-normal hover:font-normal ${
          primary ? "border-primary" : ""
        } ${!group && "mt-4"}`}
        onMouseOver={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
      >
        <p className="  text-primary text-sm   ">{children}</p>
        {status && (
          <BsArrowRightShort className="absolute right-2 top-[10px] text-primary" />
        )}
      </button>
    </Link>
  );
};
export default CtaButton;
