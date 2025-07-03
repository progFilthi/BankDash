import BalanceCard from "@/components/cards/Balancecard";
import TransactionsCard from "@/components/cards/TransactionsCard";
import React from "react";

export default function Page() {
  return (
    <div className="p-2 sm:p-4 lg:p-6">
      <h1 className="font-semibold text-[#2A352A] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
        Welcome back, Emmanuel!
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* LEFT COLUMN: 3/4 width */}
        <div className="lg:col-span-3 space-y-4">
          {/* Top: Total Balance */}
          <BalanceCard title="Total Balance" amount="$2000.29" />

          {/* Row of 3 small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <BalanceCard title="Checking" amount="$200" />
            <BalanceCard title="Savings" amount="$200" />
            <BalanceCard title="Investment" amount="$200" />
          </div>

          {/* Bottom: Transactions */}
          <TransactionsCard />
        </div>

        {/* RIGHT COLUMN: Placeholder card */}
        <div className="lg:col-span-1">
          <div className="bg-[#2A352A] rounded-2xl h-64 sm:h-80 lg:h-full w-full" />
        </div>
      </div>
    </div>
  );
}
