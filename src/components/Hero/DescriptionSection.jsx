import { Subtitle } from "../Commons/Commons";

import CategoryCard from "./CategoryCard";

const DescriptionSection = ({ categories }) => {
  return (
    <section className="mb-10 mt-16 ">
      <Subtitle text={"En qué nos especializamos"} />
      {categories && (
        <div className="flex flex-grow w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 mb-8 w-full">
            {categories.map((category) => (
              <CategoryCard key={category.category_ID} category={category} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default DescriptionSection;
