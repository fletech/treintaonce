import { useContext } from "react";
import { fetchGoogleSheetData } from "../../lib/api";
import { useReactQuery } from "../../lib/useReactQuery";
import { worksURL, categoriesURL, typesURL } from "../../lib/constants";
import Context from "../context";

const Data = () => {
  const states = useContext(Context);

  const { setWorks, setCategories, setTypes } = states;

  useReactQuery("works", () => fetchGoogleSheetData(worksURL), setWorks);
  useReactQuery(
    "categories",
    () => fetchGoogleSheetData(categoriesURL),
    setCategories
  );
  useReactQuery("types", () => fetchGoogleSheetData(typesURL), setTypes);
  return null;
  // return (
  //   <>
  //     <div>
  //       {/* Aquí puedes renderizar los datos como desees */}
  //       {/* Por ejemplo, puedes mostrarlos en una lista */}
  //       <ul>
  //         {works.map((item, index) => (
  //           <li key={index}>{item.work_title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //     <div>
  //       {/* Aquí puedes renderizar los datos como desees */}
  //       {/* Por ejemplo, puedes mostrarlos en una lista */}
  //       <ul>
  //         {categories.map((item, index) => (
  //           <li key={index}>{item.category_name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //     <div>
  //       {/* Aquí puedes renderizar los datos como desees */}
  //       {/* Por ejemplo, puedes mostrarlos en una lista */}
  //       <ul>
  //         {types.map((item, index) => (
  //           <li key={index}>{item.type_name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   </>
  // );
};

export default Data;
