import { useContext } from "react";
import { fetchGoogleSheetData } from "../../lib/api";
import { useReactQuery } from "../../lib/useReactQuery";
import { worksURL, categoriesURL, typesURL } from "../../lib/constants";
import Context from "../src/context";

const Data = () => {
  const states = useContext(Context);
  const { setWorks, setCategories, setTypes } = states;
  // const { works, categories, types } = states;
  useReactQuery("works", () => fetchGoogleSheetData(worksURL), setWorks);
  useReactQuery(
    "categories",
    () => fetchGoogleSheetData(categoriesURL),
    setCategories
  );
  useReactQuery("types", () => fetchGoogleSheetData(typesURL), setTypes);

  return null;
};

export default Data;
