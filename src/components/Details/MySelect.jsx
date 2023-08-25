import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Link, useLocation } from "react-router-dom";

// const handler = (id, categories) => {
//   console.log(id);
//   const category_name = categories.filter(
//     (category) => category.category_ID == id[0]
//   )[0].category_name;
//   console.log(category_name);

//   return category_name;
// };

const MySelect = ({
  categories,
  currentCategoriesIDs,
  setCurrentCategoriesIDs,
}) => {
  const [categoryValue, setCategoryValue] = useState(currentCategoriesIDs[0]);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [currentCategoriesIDs]);
  return (
    <Select.Root
      value={categoryValue}
      onValueChange={(value) => {
        setCurrentCategoriesIDs([value]);
        setCategoryValue(value);
      }}
    >
      <Select.Trigger className="rounded-md border-2 border-blackish/40 px-4 py-2">
        <Select.Value placeholder="Elige una categoría" />
        <Select.Icon className="ml-4" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position="popper">
          <Select.ScrollUpButton />
          <Select.Viewport className=" bg-primary px-4 ">
            {/* <Select.Item value="categoria">
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item> */}

            <Select.Group>
              <Select.Label />
              {categories.map((_) => (
                <Select.Item
                  key={_.category_ID}
                  value={_.category_ID}
                  className="capitalize py-1"
                >
                  {
                    <Link
                      to={`/nuestros-productos/categoria/${_.category_ID}&${_.category_name}`}
                    >
                      {_.category_name}
                    </Link>
                  }
                  {/* <Select.ItemText />
                  <Select.ItemIndicator /> */}
                </Select.Item>
              ))}
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
export default MySelect;
