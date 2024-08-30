import Header from "@/components/layouts/header";
import Sider from "@/components/layouts/sider";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sider />
      </div>

      <div className="flex-grow md:overflow-y-auto">
        <Header />

        {children}
      </div>
    </div>
  );
}

export default Layout;
