import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetCustomers,
  fetchGoogleSheetData,
  fetchGoogleSheetRelationWorkCategory,
} from "../../lib/api";

import { Subtitle } from "../components/Commons/Commons";
import Aside from "../components/Details/Aside";
import SelectMobile from "../components/Details/SelectMobile";
import ProductGrid from "../components/Details/ProductGrid";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const Details = () => {
  const params = useParams();
  const location = useLocation();
  const param_id = params.id.split("&")[0];
  const location_path = location.pathname.split("/")[2];
  const [currentCategoriesIDs, setCurrentCategoriesIDs] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const works = useQuery({
    queryKey: ["works"],
    queryFn: fetchGoogleSheetData,
    cacheTime: 300000,
    staleTime: 0,
  });

  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: fetchGoogleSheetCategories,
    cacheTime: 300000,
    staleTime: 0,
  });

  const relationWorkCategory = useQuery({
    queryKey: ["works-categories"],
    queryFn: fetchGoogleSheetRelationWorkCategory,

    cacheTime: 300000,
    staleTime: 0,
  });

  const customers = useQuery({
    queryKey: ["customers"],
    queryFn: fetchGoogleSheetCustomers,
    cacheTime: 300000,
    staleTime: 0,
  });

  useEffect(() => {
    if (
      categories.isSuccess &&
      works.isSuccess &&
      relationWorkCategory.isSuccess &&
      customers.isSuccess
    ) {
      setAllSelected(false);

      if (param_id == "todos") {
        setAllSelected(true);
        setCurrentCategoriesIDs([]);
        setCategoryData([]);
        setFilteredWorks(works.data);
        return;
      }
      if (location_path == "producto") {
        const singleWork = works.data.filter(
          (work) => work.work_ID == param_id
        );
        const categories_associated = relationWorkCategory.data.filter(
          (relation) => relation.work_ID == singleWork[0].work_ID
        );
        const categories_IDS = categories_associated.map(
          (relation) => relation.category_ID
        );

        const category_items = categories.data.filter(
          (item) => item.category_ID == categories_IDS[0]
        )[0];

        setFilteredWorks(singleWork);
        setCurrentCategoriesIDs(categories_IDS);
        setCategoryData(category_items);
      }

      if (location_path == "categoria") {
        const works_associated = relationWorkCategory.data.filter(
          (relation) => relation.category_ID == param_id
        );
        const filtered = works_associated.flatMap((relation) => {
          return works.data.filter((work) => work.work_ID == relation.work_ID);
        });

        const category_item = categories.data.filter(
          (item) => item.category_ID == param_id
        )[0];

        setCurrentCategoriesIDs([param_id]);
        setCategoryData(category_item);
        setFilteredWorks(filtered);
        // }
      }
    }
  }, [
    categories.isSuccess,
    customers.isSuccess,
    relationWorkCategory.isSuccess,
    works.isSuccess,
    categories.data,
    relationWorkCategory.data,
    works.data,
    // currentCategoriesIDs,
    param_id,
    location_path,
  ]);

  return (
    works.data &&
    categories.data &&
    relationWorkCategory.data &&
    customers.data &&
    currentCategoriesIDs && (
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main className={`mt-24 w-full h-auto md:min-h-[80vh]`}>
          <Subtitle text={"nuestra vidriera virtual"} />
          <div
            className={`flex  ${
              isMobile ? "flex-col min-h-[40vh]" : "max-h-[80vh]"
            }  mt-4 border-y-2 border-gray-200 py-4`}
          >
            {isMobile ? (
              <SelectMobile
                allSelected={allSelected}
                categories={categories.data}
                currentCategoriesIDs={currentCategoriesIDs}
                setCurrentCategoriesIDs={setCurrentCategoriesIDs}
              />
            ) : (
              <Aside
                allSelected={allSelected}
                categories={categories.data}
                currentCategoriesIDs={currentCategoriesIDs}
              />
            )}

            <ProductGrid
              categoryData={categoryData}
              filteredWorks={filteredWorks}
              customers={customers.data}
              currentCategoriesIDs={currentCategoriesIDs}
              allSelected={allSelected}
              categories={categories.data}
            />
          </div>
        </main>
      </motion.div>
    )
  );
};
export default Details;
