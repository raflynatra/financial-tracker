import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

function PageTitle() {
  const pathname = usePathname();
  const paths = pathname.split("/");

  return (
    <h1 className="text-3xl font-semibold">
      {capitalize(paths[paths.length - 1])}
    </h1>
  );
}

export default PageTitle;
