import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
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
import Aside from "../components/Details/Aside";
import SelectMobile from "../components/Details/SelectMobile";
import ProductGrid from "../components/Details/ProductGrid";

const Details = () => {
  const params = useParams();
  const param_id = params.id.split("&")[0];
  const location = useLocation();
  const location_path = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [currentCategoriesIDs, setCurrentCategoriesIDs] = useState([]);

  const {
    allSelected,
    categoryData,
    drawerClosed,
    filteredWorks,
    isProductShown,
    selectedCategory,
    selectedProduct,
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

  useEffect(() => {
    if (
      categories.isSuccess &&
      works.isSuccess &&
      relationWorkCategory.isSuccess &&
      customers.isSuccess
    ) {
      setCustomers(customers.data);
      // TODO: hay que controlar el allSelected, para poder hacer uso del onOpenChange del Drawer.
      //TODO: hacer uso del estado previo de allSelected, para usarlo como estado al entrar al producto y saber que la ruta anterior era ../todos
      if (drawerClosed && location_path == "producto") {
        //TODO: al hacer click en una card del grid de TODOS, se va a la categoria, y al cerrar, vuelve al grid de TODOS, deberia permanecer en todos en vez de navegar a la categoria del producto.
        console.log(allSelected);
        if (allSelected) {
          console.log("entro");
          navigate(`/nuestros-productos/categoria/todos`);
        } else {
          navigate(
            `/nuestros-productos/categoria/${selectedCategory.category_ID}&${selectedCategory.category_name}`
          );
        }
      } else {
        setDrawerClosed(false);
      }

      if (param_id == "todos") {
        setIsProductShown(false);
        setAllSelected(true);
        setCurrentCategoriesIDs([]);
        setCategoryData([]);
        setFilteredWorks(works.data);
        return;
      }

      console.log(allSelected);
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
        setIsProductShown(true);
        setFilteredWorks(singleWork);
        setSelectedProduct(singleWork);
        setSelectedCategory(category_items);
        setCurrentCategoriesIDs(categories_IDS);
        //TODO: no modificar el filtered work para renderizar el producto, si no trabajar con selected work, para no tener que volver a filtrar el objeto de works, y tal ve evitar un llamado a la api?
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
        setIsProductShown(false);
        setCurrentCategoriesIDs([param_id]);
        setSelectedCategory(category_item);
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
    isProductShown,
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
            {/* {isMobile ? (
              <SelectMobile
                allSelected={allSelected}
                categories={categories.data}
                currentCategoriesIDs={currentCategoriesIDs}
                setCurrentCategoriesIDs={setCurrentCategoriesIDs}
              />
            ) : ( */}
            <Aside
              allSelected={allSelected}
              categories={categories.data}
              currentCategoriesIDs={currentCategoriesIDs}
              setAllSelected={setAllSelected}
            />
            {/* )} */}

            <ProductGrid />
          </div>
        </main>
      </motion.div>
    )
  );
};
export default Details;
