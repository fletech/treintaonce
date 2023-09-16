import { useState } from "react";
import { content_layout } from "../../../lib/constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
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
          {content_layout.navbar.items.map((element, i) => (
            <Link
              key={i}
              to={element.url}
              className={` mx-2 font-semibold text-blackish border-b-2 ${
                location_path == element.url.split("/")[1]
                  ? " border-primary"
                  : "border-primary/0"
              }`}
            >
              {element.menu}
            </Link>
          ))}

          {/* Agrega más enlaces según tus necesidades */}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <i className="fas fa-times text-white"></i>
            ) : (
              <i className="fas fa-bars text-white"></i>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-500">
            {/* Aquí añades los enlaces para la vista de tablet y móvil */}
            <a href="#" className="block text-white p-2">
              Inicio
            </a>
            <a href="#" className="block text-white p-2">
              Acerca de
            </a>
            <a href="#" className="block text-white p-2">
              Servicios
            </a>
            {/* Agrega más enlaces según tus necesidades */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
