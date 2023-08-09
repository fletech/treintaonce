import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col px-8 md:px-32 lg:px-40 bg-bgMain">
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
