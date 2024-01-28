import { useEffect, useState } from "react";

import { useWindowSize } from "@uidotdev/usehooks";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDetailsContext } from "../../context/useDetailsContext";

import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetCustomers,
  fetchGoogleSheetData,
  fetchGoogleSheetRelationWorkCategory,
} from "../../lib/api";

import { Subtitle } from "../components/Commons/Commons";
import { DesktopAside, MobileAside } from "../components/Details/Aside";
import ProductGrid from "../components/Details/ProductGrid";

const Details = () => {
  const size = useWindowSize();
  const isMobile = size.width < 800;
  const params = useParams();
  const param_id = params.id.split("&")[0];
  const location = useLocation();
  const location_path = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [currentCategoriesIDs, setCurrentCategoriesIDs] = useState([]);

  const {
    allSelected,
    drawerClosed,
    isProductShown,
    selectedCategory,
    setAllSelected,
    setCategoryData,
    setCustomers,
    setDrawerClosed,
    setFilteredWorks,
    setIsProductShown,
    setSelectedProduct,
    setSelectedCategory,
  } = useDetailsContext();

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

  const handleCategoryChange = () => {
    if (location_path === "producto" && !drawerClosed) {
      const singleWork = works.data.find((work) => work.work_ID === param_id);
      const categories_associated = relationWorkCategory.data.filter(
        (relation) => relation.work_ID === singleWork.work_ID
      );
      const categories_IDS = categories_associated.map(
        (relation) => relation.category_ID
      );
      const works_associated = relationWorkCategory.data.filter(
        (relation) => relation.category_ID === categories_IDS[0]
      );
      const filtered = works_associated.flatMap((relation) =>
        works.data.filter((work) => work.work_ID === relation.work_ID)
      );

      const category_items = categories.data.find(
        (item) => item.category_ID === categories_IDS[0]
      );

      setIsProductShown(true);
      allSelected ? setFilteredWorks(works.data) : setFilteredWorks(filtered);
      !allSelected && setSelectedCategory(category_items);
      setSelectedProduct(singleWork);
      setCurrentCategoriesIDs(categories_IDS);
    }

    if (location_path == "categoria") {
      const works_associated = relationWorkCategory.data.filter(
        (relation) => relation.category_ID === param_id
      );
      const filtered = works_associated.flatMap((relation) =>
        works.data.filter((work) => work.work_ID === relation.work_ID)
      );

      const category_item = categories.data.find(
        (item) => item.category_ID === param_id
      );

      setAllSelected(false);
      setIsProductShown(false);
      setCurrentCategoriesIDs([param_id]);
      setSelectedCategory(category_item);
      setFilteredWorks(filtered);
    }
  };

  useEffect(() => {
    if (
      categories.isSuccess &&
      works.isSuccess &&
      relationWorkCategory.isSuccess &&
      customers.isSuccess
    ) {
      setCustomers(customers.data);

      if (drawerClosed && location_path === "producto") {
        if (allSelected) {
          navigate(`/nuestros-productos/categoria/todos`);
          setDrawerClosed(true);
        } else {
          navigate(
            `/nuestros-productos/categoria/${selectedCategory.category_ID}&${selectedCategory.category_name}`
          );
        }
      } else {
        setDrawerClosed(false);
      }

      if (param_id === "todos") {
        setIsProductShown(false);
        setAllSelected(true);
        setCurrentCategoriesIDs([]);
        setCategoryData([]);
        setSelectedCategory([]);
        setFilteredWorks(works.data);
        setDrawerClosed(true);
        return;
      }
      handleCategoryChange();
    }
  }, [
    categories.data,
    works.data,
    relationWorkCategory.data,
    customers.data,
    isProductShown,
    param_id,
    location_path,
  ]);

  return (
    works.data &&
    categories.data &&
    relationWorkCategory.data &&
    customers.data &&
    currentCategoriesIDs && (
      // <motion.div
      //   initial={{ x: -1000 }}
      //   animate={{ x: 0 }}
      //   exit={{ x: 0 }}
      //   transition={{ duration: 0.5 }}
      // >
      <motion.div
        initial={{ opacity: 0.5, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <main className={`mt-16 md:mt-24 w-full h-auto md:min-h-[80vh]`}>
          <Subtitle text={"nuestra vidriera virtual"} />
          <div
            className={`flex relative ${
              isMobile ? "flex-col min-h-[40vh]" : "max-h-[80vh]"
            }  mt-4 border-y-2 border-gray-200 py-4`}
          >
            {isMobile ? (
              <MobileAside categories={categories.data} />
            ) : (
              <DesktopAside categories={categories.data} />
            )}

            <ProductGrid />
          </div>
        </main>
      </motion.div>
    )
  );
};
export default Details;
