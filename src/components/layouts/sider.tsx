import { clsx } from "clsx";
import Link from "next/link";
import { fontLogo } from "@/config/fonts";
import { BanknotesIcon } from "@heroicons/react/24/outline";

function Sider() {
  return (
    <div className="flex h-full bg-gray-950 p-5 md:flex-col md:items-center md:border-r-1 md:border-gray-800">
      <Link
        className={clsx("flex items-center gap-1 text-3xl", fontLogo.className)}
        href="/dashboard"
      >
        <BanknotesIcon className="h-8 w-8" />
        <span>Fintra</span>
      </Link>

      {/* <div></div> */}
    </div>
  );
}

export default Sider;
