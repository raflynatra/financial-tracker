import React from "react";
import { Input, InputProps } from "@nextui-org/react";

const AppInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "faded", errorMessage, labelPlacement = "outside", ...props },
    ref,
  ) => {
    return (
      <Input
        radius="sm"
        ref={ref}
        variant={variant}
        errorMessage={errorMessage}
        isInvalid={errorMessage !== undefined}
        labelPlacement={labelPlacement}
        {...props}
      />
    );
  },
);

AppInput.displayName = "AppInput";

export default AppInput;
