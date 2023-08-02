import { useState } from "react";
import { content_layout } from "../../../lib/constants";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="h-[8vh] md:px-20 px-8 w-full flex items-center justify-between backdrop-blur-xl fixed z-10 bg-navbar opacity-97">
        <div className="flex items-start">
          {/*<img src="/path/to/your/logo.png" alt="Logo" className="h-8 w-8 mr-4" /> */}

          <span className="font-bold text-lg">treintaONce</span>
        </div>
        <div className="hidden md:flex items-center">
          {content_layout.navbar.items.map((element, i) => (
            <a key={i} href="#" className=" mx-2 font-semibold text-blackish">
              {element}
            </a>
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
