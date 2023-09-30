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
      <div className=" min-h-screen flex flex-col pt-8 px-8 md:px-20 lg:px-32 bg-bgMain">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>

        {/* Aquí puedes agregar un pie de página u otros elementos que desees mostrar en todas las páginas */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
