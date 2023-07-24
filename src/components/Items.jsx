import { useState } from "react";
import { fetchGoogleSheetData, useReactQuery } from "../../lib/api";
import { worksURL, categoriesURL, typesURL } from "../../lib/constants";

const Items = () => {
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  useReactQuery("works", () => fetchGoogleSheetData(worksURL), setWorks);
  useReactQuery(
    "categories",
    () => fetchGoogleSheetData(categoriesURL),
    setCategories
  );
  useReactQuery("types", () => fetchGoogleSheetData(typesURL), setTypes);

  return (
    <>
      <div>
        {/* Aquí puedes renderizar los datos como desees */}
        {/* Por ejemplo, puedes mostrarlos en una lista */}
        <ul>
          {works.map((item, index) => (
            <li key={index}>{item.work_title}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* Aquí puedes renderizar los datos como desees */}
        {/* Por ejemplo, puedes mostrarlos en una lista */}
        <ul>
          {categories.map((item, index) => (
            <li key={index}>{item.category_name}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* Aquí puedes renderizar los datos como desees */}
        {/* Por ejemplo, puedes mostrarlos en una lista */}
        <ul>
          {types.map((item, index) => (
            <li key={index}>{item.type_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
