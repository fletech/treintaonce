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

const Details = () => {
  const params = useParams();
  const location = useLocation();
  const param_id = params.id.split("&")[0];
  const location_path = location.pathname.split("/")[2];
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [relationWorkCategory, setRelationWorkCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 0,
    onSuccess: setWorks,
  });

  useQuery(["categories"], fetchGoogleSheetCategories, {
    staleTime: 0,
    onSuccess: setCategories,
  });

  useQuery(["works-categories"], fetchGoogleSheetRelationWorkCategory, {
    staleTime: 0,
    onSuccess: setRelationWorkCategory,
  });

  useQuery(["customers"], fetchGoogleSheetCustomers, {
    staleTime: 0,
    onSuccess: setCustomers,
  });

  useEffect(() => {
    if (
      categories.length > 0 &&
      works.length > 0 &&
      relationWorkCategory.length > 0 &&
      customers.length > 0
    ) {
      setAllSelected(false);
      if (param_id == "todos") {
        setAllSelected(true);
        setCurrentCategory([]);
        setFilteredWorks(works);
        return;
      }
      if (location_path == "producto") {
        const singleWork = works.filter((work) => work.work_ID == param_id);
        const categories_associated = relationWorkCategory.filter(
          (relation) => relation.work_ID == singleWork[0].work_ID
        );
        const categories_IDS = categories_associated.map(
          (relation) => relation.category_ID
        );
        setFilteredWorks(singleWork);
        setCurrentCategory(categories_IDS);
      }

      if (location_path == "categoria") {
        const works_associated = relationWorkCategory.filter(
          (relation) => relation.category_ID == param_id
        );
        const filtered = works_associated.flatMap((relation) => {
          return works.filter((work) => work.work_ID == relation.work_ID);
        });

        setCurrentCategory([param_id]);
        setFilteredWorks(filtered);
        // }
      }
    }
  }, [
    categories,
    customers,
    relationWorkCategory,
    works,
    param_id,
    location_path,
  ]);

  return (
    (works || categories || relationWorkCategory || customers) && (
      <main className={`mt-32 w-full h-auto`}>
        <Subtitle text={"nuestra vidriera virtual"} />
        <div
          className={`flex  ${
            isMobile ? "flex-col min-h-[40vh]" : "min-h-[40vh]"
          }  mt-4 border-y-2  border-gray-200 py-4`}
        >
          {isMobile ? (
            <SelectMobile
              allSelected={allSelected}
              categories={categories}
              currentCategory={currentCategory}
            />
          ) : (
            <Aside
              allSelected={allSelected}
              categories={categories}
              currentCategory={currentCategory}
            />
          )}

          <ProductGrid filteredWorks={filteredWorks} customers={customers} />
        </div>
      </main>
    )
  );
};
export default Details;
