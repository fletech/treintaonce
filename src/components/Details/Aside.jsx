import { BiSolidRightArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDetailsContext } from "../../../context/useDetailsContext";
import { BsFilterCircleFill, BsFilterCircle } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

export const MenuOptions = ({ items, selected }) => {
  return items.map((category) => (
    <div
      key={category.category_ID}
      className="w-auto overflow-y-scroll h-auto  no-scrollbar"
    >
      <div
        className={`capitalize text-blackish/70  mt-1 flex flex-col items-stretch justify-start ${
          selected?.category_ID == category.category_ID
            ? "text-primary font-bold"
            : ""
        }`}
      >
        <Link
          to={`/nuestros-productos/categoria/${category.category_ID}&${category.category_name}`}
        >
          <div className="flex items-start">
            {selected?.category_ID == category.category_ID ? (
              <BiSolidRightArrow size={8} className="mr-2  top-2 relative" />
            ) : (
              <BiRightArrow size={8} className="mr-2 top-2 relative" />
            )}
            <p>{category.category_name}</p>
          </div>
        </Link>
      </div>
    </div>
  ));
};

export const MobileAside = ({ categories }) => {
  const { allSelected, openMobileAside, selectedCategory, setOpenMobileAside } =
    useDetailsContext();
  const [filtered, setFiltered] = useState(false);

  const filterHandler = () => {
    setOpenMobileAside(!openMobileAside);
  };
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[40px] flex  justify-start items-center mb-4">
        <div className="mr-2 text-2xl" onClick={filterHandler}>
          {!openMobileAside ? <BsFilterCircle /> : <BsFilterCircleFill />}
        </div>
        <div>Mostrando: {selectedCategory?.category_name}</div>
        <div
          className={`absolute ${
            openMobileAside ? "" : "hidden"
          } w-full bg-bgHighlight border rounded-md h-full top-14 p-4`}
          // TODO: ajustar el alto del contenedor de categorias
        >
          <>
            <h3>Seleccioná</h3>
            <MenuOptions items={categories} selected={selectedCategory} />
          </>
        </div>
      </div>
    </motion.div>
  );
};

export const DesktopAside = ({ categories }) => {
  const { allSelected, selectedCategory } = useDetailsContext();

  return (
    <div
      className={`flex flex-col w-full max-w-[16vw] mr-4 border-r-2 pr-4 border-gray-200  h-auto place-content-start `}
    >
      <span className="bold border-b-2 border-gray-100 pb-2">Categorías</span>
      {/* TODOS */}
      <Link to={`/nuestros-productos/categoria/todos`}>
        <div
          className={`flex items-start  mt-2 ${
            allSelected ? "text-primary font-bold" : "text-blackish/70 "
          }`}
        >
          {allSelected ? (
            <BiSolidRightArrow size={8} className="mr-2 top-2 relative" />
          ) : (
            <BiRightArrow size={8} className="mr-2 top-2 relative" />
          )}
          <p className="capitalize">
            {categories.length != 0 ? "Todos" : "Cargando..."}
          </p>
        </div>
      </Link>
      {/* CATEGORIAS */}
      <MenuOptions items={categories} selected={selectedCategory} />
    </div>
  );
};
