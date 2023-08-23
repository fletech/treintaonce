import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="min-h-screen flex flex-col px-8 md:px-24 lg:px-60 bg-bgMain">
        {/* Aquí puedes agregar una barra de navegación, encabezado o cualquier otro elemento que desees mostrar en todas las páginas */}

        {/* Contenido principal */}
        <main className="">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>

        {/* Aquí puedes agregar un pie de página u otros elementos que desees mostrar en todas las páginas */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
