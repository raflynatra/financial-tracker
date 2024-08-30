import { capitalize, formatCurrency } from "@/lib/utils";
import { clsx } from "clsx";

interface AccountCardProps {
  title: string;
  balance: number;
}

function AccountCard({ title, balance }: AccountCardProps) {
  return (
    <div className="flex w-1/3 flex-col justify-between gap-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-700/40 p-5 shadow-inner shadow-gray-500">
      <span className="text-xl">{capitalize(title)}</span>
      <span
        className={clsx(
          "text-3xl font-semibold",
          title === "assets"
            ? "text-blue-500"
            : title === "liabilities"
              ? "text-red-500"
              : "text-gray-100",
        )}
      >
        {`IDR ${formatCurrency(balance)}`}
      </span>
    </div>
  );
}

export default AccountCard;
