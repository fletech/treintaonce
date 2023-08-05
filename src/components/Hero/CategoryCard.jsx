// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  // const [SVG, setSVG] = useState("");
  // useEffect(() => {
  //   // formatter(category, setSVG);
  //   const SVG_first = category.category_icon.split("<!--!")[0];
  //   const SVG_second = category.category_icon.split("-->")[1];
  //   const SVG_formatted = `${SVG_first}
  //     ${SVG_second != undefined ? SVG_second : ""}`;
  //   setSVG(SVG_formatted);
  // }, [category]);
  return (
    category && (
      <div className="bg-white p-2 rounded w-full" key={category.category_ID}>
        {/* {category && (
          <div
            dangerouslySetInnerHTML={{
              __html: SVG,
            }}
          />
        )} */}

        <Link
          to={`/nuestros-trabajos/categoria/${category.category_ID}&${category.category_name}`}
          className="text-lg font-semibold capitalize"
        >
          {category.category_name}
        </Link>
      </div>
    )
  );
};
export default CategoryCard;
