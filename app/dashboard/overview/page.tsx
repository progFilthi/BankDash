import BalanceCard from "@/components/cards/Balancecard";
import React from "react";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="font-semibold text-[#2A352A] text-2xl mb-6">
        Welcome back, Emmanuel!
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Top card: spans full width (3 cols) */}
        <div className="col-span-3">
          <BalanceCard title="Total Balance" amount="$2000.29" />
        </div>

        {/* Row of 3 small cards */}
        <BalanceCard title="Checking" amount="$200" />
        <BalanceCard title="Savings" amount="$200" />
        <BalanceCard title="Investment" amount="$200" />

        {/* Bottom card (transactions): spans 3 cols */}
        <div className="col-span-3">
          <BalanceCard title="Transactions" amount="" />
        </div>
      </div>
    </div>
  );
}
