import React from "react";
import { Select, SelectItem, SelectProps } from "@nextui-org/react";
interface AppSelectProps extends SelectProps {
  items: {
    key: string;
    label: string;
    value: string;
  }[];
}

const AppSelect = React.forwardRef<
  HTMLSelectElement,
  Omit<AppSelectProps, "children">
>(
  (
    {
      items,
      variant = "faded",
      errorMessage,
      labelPlacement = "outside",
      ...props
    },
    ref,
  ) => {
    return (
      <Select
        radius="sm"
        ref={ref}
        variant={variant}
        errorMessage={errorMessage}
        isInvalid={errorMessage !== undefined}
        labelPlacement={labelPlacement}
        listboxProps={{
          itemClasses: {
            base: [
              "dark:data-[hover=true]:bg-gray-700",
              "dark:data-[selected=true]:bg-gray-700",
            ],
          },
        }}
        {...props}
      >
        {items.map((item) => (
          <SelectItem key={item.key} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    );
  },
);

AppSelect.displayName = "AppSelect";

export default AppSelect;
