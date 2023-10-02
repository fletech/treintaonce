import { content_layout } from "../../../lib/constants";
import { Subtitle } from "../Commons/Commons";

// import CategoryCard from "./CategoryCard";

const finderSpans = (text) => {
  // const array = spans.map((span) => text.find(span));
  return text;
};

const DescriptionSection = () => {
  const content = finderSpans(content_layout.heroDescription.content);

  return (
    <section className="mb-10 mt-16 md:mt-24 ">
      <Subtitle text={"En qué nos especializamos?"} />
      <p
        className="tracking-wider"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {/* {categories && (
        <div className="flex flex-grow w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 mb-8 w-full">
            {categories.map((category) => (
              <CategoryCard key={category.category_ID} category={category} />
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
};
export default DescriptionSection;
