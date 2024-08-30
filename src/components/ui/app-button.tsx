import { Button, ButtonProps } from "@nextui-org/react";
import React from "react";

interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
}
function AppButton({ children, ...props }: AppButtonProps) {
  return (
    <Button radius="sm" {...props}>
      {children}
    </Button>
  );
}

export default AppButton;
