import { useRef, useState } from "react";
import { content_layout } from "../../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import useOutsideComponent from "../../hooks/useOutsideComponent";
import MenuOptions from "./Menu";
import { useWindowSize } from "@uidotdev/usehooks";

const Navbar = () => {
  let size = useWindowSize();
  let isMobile = size.width < 768;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const wrapperRef = useRef(null);

  useOutsideComponent(wrapperRef, setMenuOpen);

  const location = useLocation();
  const location_path = location.pathname.split("/")[1];

  return (
    <header>
      <nav className="h-[8vh] px-8 md:px-20 lg:px-32 w-full flex items-center justify-between backdrop-blur-xl fixed z-10 bg-navbar opacity-97">
        <div className="flex items-start">
          <Link to={"/"}>
            <img src={"/assets/logo.svg"} className="w-[130px] h-full" />
            {/* <span className="font-bold text-lg">
              treinta<span className="text-primary">ON</span>ce
            </span> */}
          </Link>
        </div>
        <div className="hidden md:flex items-center ">
          <MenuOptions
            options={content_layout.navbar.items}
            location_path={location_path}
          />
        </div>

        <div
          className={`${
            isMobile ? "flex" : "hidden"
          } items-center w-[60px] justify-end h-[60px]`}
        >
          <button onClick={toggleMenu} className="text-primary text-2xl">
            {isMenuOpen ? <RxCross2 /> : <TbMenu />}
          </button>
        </div>
        {isMenuOpen && isMobile && (
          <div className="md:hidden absolute top-16 left-0 right-0 b-0 h-screen bg-blackish/60  pl-8 backdrop-blur-sm">
            <div
              ref={wrapperRef}
              className="md:hidden bg-bgHighlight flex flex-col items-start h-auto rounded-md mt-2 p-6"
            >
              <MenuOptions
                options={content_layout.navbar.items}
                location_path={location_path}
                setMenuOpen={setMenuOpen}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
