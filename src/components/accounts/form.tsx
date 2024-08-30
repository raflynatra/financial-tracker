"use client";

import { Controller, useForm } from "react-hook-form";
import AppInput from "../ui/app-input";
import AppButton from "../ui/app-button";
import AppSelect from "../ui/app-select";
import { ACCOUNT_GROUPS } from "@/constants";

interface AccountFormProps {
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
  data?: { group: string; name: string; amount: string };
  isLoading?: boolean;
}

const AccountForm: React.FC<AccountFormProps> = ({
  onSubmit,
  onClose,
  data,
  isLoading,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
      <Controller
        name="group"
        control={control}
        rules={{
          required: "Account group is required",
        }}
        render={({ field }) => (
          <AppSelect
            {...field}
            items={ACCOUNT_GROUPS.map((group) => ({
              key: group.id.toString(),
              value: group.id,
              label: group.name,
            }))}
            placeholder="Select account group"
            label="Account Group"
            errorMessage={errors["group"]?.message?.toString()}
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        rules={{
          required: "Account name is required",
        }}
        render={({ field }) => (
          <AppInput
            {...field}
            placeholder="Input account name"
            label="Account Name"
            errorMessage={errors["name"]?.message?.toString()}
          />
        )}
      />

      <Controller
        name="amount"
        control={control}
        rules={{
          pattern: {
            value: /^(0|[1-9]\d*)(\.\d+)?$/,
            message: "Amount must be a number",
          },
        }}
        render={({ field }) => (
          <AppInput
            {...field}
            type="number"
            placeholder="0"
            label="Amount"
            errorMessage={errors["amount"]?.message?.toString()}
          />
        )}
      />

      <div className="flex items-center justify-center gap-x-3 py-2">
        <AppButton type="button" onPress={onClose} variant="flat">
          Cancel
        </AppButton>
        <AppButton type="submit" color="primary" isLoading={isLoading}>
          Submit
        </AppButton>
      </div>
    </form>
  );
};

export default AccountForm;
