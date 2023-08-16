import { BiSolidRightArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Aside = ({ allSelected, categories, currentCategory }) => {
  return (
    <div className="grid w-auto mr-4 border-r-2 pr-8 border-gray-200 max-h-[50vh] place-content-start ">
      <span className="bold border-b-2 border-gray-100 pb-2">Categorías</span>
      <Link to={`/nuestros-trabajos/categoria/todos`}>
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
      {categories.map((category) => (
        <div key={category.category_ID}>
          <div
            className={`capitalize text-blackish/70  mt-1 ${
              currentCategory.includes(category.category_ID)
                ? "text-primary font-bold"
                : ""
            }`}
          >
            <Link
              to={`/nuestros-trabajos/categoria/${category.category_ID}&${category.category_name}`}
            >
              <div className="flex items-start">
                {currentCategory.includes(category.category_ID) ? (
                  <BiSolidRightArrow
                    size={8}
                    className="mr-2  top-2 relative"
                  />
                ) : (
                  <BiRightArrow size={8} className="mr-2 top-2 relative" />
                )}
                {category.category_name}
              </div>
            </Link>
          </div>
          {/* TODO: puede ser productos dentro de la categoria */}
          {/* <div className="ml-6   border-l-[1px] border-gray-300">
                  {}
                  <div className="flex">
                    <span className="text-gray-300 relative -left-0.5">-</span>
                    <p className="text-blackish/50 ">Producto</p>
                  </div>
                  <div className="flex">
                    <span className="text-gray-300 relative -left-0.5">-</span>
                    <p className="text-blackish/50 ">Producto</p>
                  </div>
                </div> */}
        </div>
      ))}
    </div>
  );
};
export default Aside;