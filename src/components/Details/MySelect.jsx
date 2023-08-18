import React from "react";
import * as Select from "@radix-ui/react-select";

const MySelect = ({ categories, currentCategory }) => {
  return (
    <Select.Root defaultValue={currentCategory.category_ID}>
      <Select.Trigger className="bg-secondary">
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport className="bg-primary">
            <Select.Item>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>

            <Select.Group>
              <Select.Label />
              {categories.map((_) => (
                <Select.Item
                  key={_.category_ID}
                  value={_.category_ID}
                  className="capitalize"
                >
                  {_.category_name}
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
