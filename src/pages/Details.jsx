import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetData,
  fetchGoogleSheetRelationWorkCategory,
} from "../../lib/api";
// import Marquee from "react-fast-marquee";

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

  useEffect(() => {
    // console.log(categories);
    // console.log(works);
    // console.log(relationWorkCategory);
    if (
      categories.length > 0 &&
      works.length > 0 &&
      relationWorkCategory.length > 0
    ) {
      setAllSelected(false);
      if (location_path == "producto") {
        if (param_id == "todos") {
          setAllSelected(true);
          setCurrentCategory([]);
          setFilteredWorks(works);
        } else {
          const singleWork = works.filter((work) => work.work_ID == param_id);
          setFilteredWorks(singleWork);
          const categories_associated = relationWorkCategory.filter(
            (relation) => relation.work_ID == singleWork[0].work_ID
          );
          const categories_IDS = categories_associated.map(
            (relation) => relation.category_ID
          );
          setCurrentCategory(categories_IDS);
        }
      }

      if (location_path == "categoria") {
        if (param_id == "todos") {
          setAllSelected(true);
          setCurrentCategory([]);
          setFilteredWorks(works);
        } else {
          setCurrentCategory([param_id]);

          const works_associated = relationWorkCategory.filter(
            (relation) => relation.category_ID == param_id
          );

          const filtered = works_associated.flatMap((relation, index) => {
            return works.filter((work) => work.work_ID == relation.work_ID);
          });

          setFilteredWorks(filtered);
        }
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
      <section className="mt-32 w-full ">
        <div>
          Path: {location_path} / ID: {param_id}
        </div>
        <div className="flex w-full mt-4  border-t-2 border-gray-200 pt-4">
          <div className="grid w-auto mr-8 border-r-2 pr-8 border-gray-200 min-h-[50vh] place-content-start">
            <span className="bold border-b-2 border-gray-100 pb-2">
              Categorías
            </span>
            <Link to={`/nuestros-trabajos/categoria/todos`}>
              <p
                className={`capitalize text-blackish/70  mt-1 ${
                  allSelected ? "text-blue-500 font-bold" : ""
                }`}
              >
                {categories.length != 0 ? "Todos" : "Cargando..."}
              </p>
            </Link>
            {categories.map((category) => (
              <div key={category.category_ID}>
                <p
                  className={`capitalize text-blackish/70  mt-1 ${
                    currentCategory.includes(category.category_ID)
                      ? "text-blue-500 font-bold"
                      : ""
                  }`}
                >
                  <Link
                    to={`/nuestros-trabajos/categoria/${category.category_ID}&${category.category_name}`}
                  >
                    {category.category_name}
                  </Link>
                </p>
                {/* <div className="ml-6   border-l-[1px] border-gray-300">
                  {}
                  <div className="flex">
                    <span className="text-gray-300 relative -left-0.5">-</span>
                    <p className="text-blackish/50 ">Producto</p>
                  </div>
                  <div className="flex">
                    <span className="text-gray-300 relative -left-0.5">-</span>
                    <p className="text-blackish/50 ">Producto</p>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          {/* <Marquee play={false}> */}
          <div className="w-full overflow-x-scroll flex py-8">
            {filteredWorks.map((work) => (
              <div
                key={work.work_ID}
                className="w-auto grid place-items-center border border-gray-100 mx-4 p-4 rounded-xl max-h-[50vh]"
              >
                <div className="grid w-full">
                  <p>{work.work_title}</p>
                  <p>{work.work_customer}</p>
                  <p>{work.work_description}</p>
                </div>
                <div
                  className="w-[300px] min-h-[20] h-[30vh] bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(${work.work_image_cover})`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* </Marquee> */}
        </div>
      </section>
    )
  );
};
export default Details;
