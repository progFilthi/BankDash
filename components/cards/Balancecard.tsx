import React from "react";
import { CircleDollarSignIcon } from "lucide-react";

export default function BalanceCard({
  title,
  amount,
}: {
  title: string;
  amount: string;
}) {
  return (
    <div className="bg-[#2A352A] text-[#EDEFED] p-4 sm:p-6 rounded-2xl space-y-4 sm:space-y-6 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-base sm:text-lg font-medium">{title}</h3>
        <CircleDollarSignIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#EDEFED]/80" />
      </div>

      {amount && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center tracking-tight">
          {amount}
        </h2>
      )}

      {title === "Total Balance" && (
        <button
          type="button"
          className="bg-[#374436] hover:bg-[#4A5A46] transition w-full p-2 sm:p-3 rounded-lg cursor-pointer text-sm sm:text-base"
        >
          View Accounts
        </button>
      )}
    </div>
  );
}
