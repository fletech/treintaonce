import { useContext } from "react";
import Context from "../../context";

const Categories = () => {
  const states = useContext(Context);

  const { categories } = states;

  return (
    <>
      <div>
        <ul>
          {categories.map((item, index) => (
            <li key={index}>{item.category_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
