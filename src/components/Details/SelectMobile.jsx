// import { BiSolidRightArrow, BiRightArrow } from "react-icons/bi";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MySelect from "./MySelect";

const SelectMobile = ({
  allSelected,
  categories,
  currentCategoriesIDs,
  setCurrentCategoriesIDs,
}) => {
  console.log(categories[0]);
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid w-auto mr-4 mb-4 pr-8 border-gray-200 max-h-[50vh] place-content-start ">
        <span className="bold border-b-2 border-gray-100 pb-2">Categorías</span>
        {/* TODOS */}

        {/* CATEGORIAS */}

        <MySelect
          currentCategoriesIDs={currentCategoriesIDs}
          setCurrentCategoriesIDs={setCurrentCategoriesIDs}
          categories={categories}
          allSelected={allSelected}
        />
        {categories.map((category) => (
          <div key={category.category_ID}>{category.category_title}</div>
        ))}
      </div>
    </motion.div>
  );
};
export default SelectMobile;
