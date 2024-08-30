import AddAccountButton from "@/components/accounts/add-button";
import AccountCard from "@/components/accounts/card";
import AccountList from "@/components/accounts/list";
import React from "react";

function Page() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] p-5">
      <AddAccountButton />

      <div className="mb-7 flex justify-between gap-10">
        <AccountCard title="assets" balance={12500000} />
        <AccountCard title="liabilities" balance={250000} />
        <AccountCard title="Assets" balance={250000} />
      </div>

      <AccountList />
    </main>
  );
}

export default Page;
