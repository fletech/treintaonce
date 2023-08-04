import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:px-20 px-8">
        {/* Aquí puedes agregar una barra de navegación, encabezado o cualquier otro elemento que desees mostrar en todas las páginas */}

        {/* Contenido principal */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Aquí puedes agregar un pie de página u otros elementos que desees mostrar en todas las páginas */}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
