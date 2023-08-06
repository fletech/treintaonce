import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetData,
  fetchGoogleSheetRelationWorkCategory,
} from "../../lib/api";

const Details = () => {
  const params = useParams();
  const location = useLocation();
  const param_id = params.id.split("&")[0];
  const location_path = location.pathname.split("/")[2];
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [relationWorkCategory, setRelationWorkCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  //TODO: desde el navbar al hacer click en trabajos debe llevar a la ruta /nuestros-trabajos/producto/todos
  //TODO: y poder mostrar el primer producto de la primera categoria, o un marquee en el top de la seccion que deslice al
  //TODO: hacer hover para seleccionar un producto
  //TODO: ver como hacer con el layout de mobile

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

  useEffect(() => {
    // console.log(categories);
    // console.log(works);
    // console.log(relationWorkCategory);
    if (
      categories.length > 0 &&
      works.length > 0 &&
      relationWorkCategory.length > 0
    ) {
      if (location_path == "producto") {
        const singleWork = works.filter((work) => work.work_ID == param_id);
        setFilteredWorks(singleWork[0]);
        const categories_associated = relationWorkCategory.filter(
          (relation) => relation.work_ID == singleWork[0].work_ID
        );
        const categories_IDS = categories_associated.map(
          (relation) => relation.category_ID
        );
        setCurrentCategory(categories_IDS);
      }

      //   //gpt
      //   const selectedCategory = categories.find(
      //     (category) => category.category_ID === param_id
      //   );

      //   // if (selectedCategory) {
      //   //   setCurrentCategory(selectedCategory);

      //   if (location_path === "categoria") {
      //     const filteredWork = relationWorkCategory.filter(
      //       (relation) => relation.work_ID === param_id
      //     );
      //     return null;
      //   } else if (location_path === "multiple") {
      //     const filteredWorksIds = relationWorkCategory
      //       .filter((relation) => relation.category_id === param_id)
      //       .map((relation) => relation.work_id);

      //     const filteredMultipleWorks = works.filter((work) =>
      //       filteredWorksIds.includes(work.id)
      //     );

      //     setFilteredWorks(filteredMultipleWorks);
      //   }

      //   console.log(currentCategory);
    }
  }, [categories, relationWorkCategory, works, param_id, location_path]);

  return (
    (works || categories || relationWorkCategory) && (
      <section className="mt-32 w-full">
        <div>
          Path: {location_path} / ID: {param_id}
        </div>
        <div className="flex w-full mt-4  border-t-2 border-gray-200 pt-4">
          <div className="grid w-auto mr-8 border-r-2 pr-8 border-gray-200">
            <span className="bold border-b-2 border-gray-100 pb-2">
              Categories
            </span>

            {categories.map((category) => (
              <p
                key={category.category_ID}
                className={`capitalize text-blackish/70  mt-1 ${
                  currentCategory.includes(category.category_ID)
                    ? "text-blue-500 font-bold"
                    : ""
                }`}
              >
                {category.category_name}
              </p>
            ))}
          </div>
          <div className="w-auto grid">
            <p>{filteredWorks.work_title}</p>
            <p>{filteredWorks.work_customer}</p>
            <p>{filteredWorks.work_description}</p>
            <div
              className="w-[300px] h-[300px] bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${filteredWorks.work_image_cover})`,
              }}
            />
          </div>
        </div>
      </section>
    )
  );
};
export default Details;
