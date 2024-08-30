"use client";

import { useDisclosure } from "@nextui-org/react";
import AppButton from "../ui/app-button";
import AppModal from "../ui/app-modal";
import AccountForm from "./form";
import { useState } from "react";
import toast from "react-hot-toast";
import { PlusIcon } from "@heroicons/react/24/outline";

function AddAccountButton() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      onClose();

      toast.success("Account added successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="absolute bottom-10 right-10">
      <div className="flex w-full justify-end">
        <AppButton
          onPress={onOpen}
          isIconOnly
          className="h-14 w-14 rounded-full p-3"
          color="primary"
        >
          <PlusIcon />
        </AppButton>
      </div>

      <AppModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Add Account"
        footer={false}
      >
        <AccountForm
          onClose={onClose}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </AppModal>
    </div>
  );
}

export default AddAccountButton;
