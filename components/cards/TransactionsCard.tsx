// app/components/cards/TransactionsCard.tsx
"use client";

type Transaction = {
  id: number;
  description: string;
  date: string;
  amount: string;
};

const transactions: Transaction[] = [
  {
    id: 1,
    description: "Grocery Store",
    date: "July 1, 2025",
    amount: "-$50.00",
  },
  { id: 2, description: "Salary", date: "July 1, 2025", amount: "+$2000.00" },
  {
    id: 3,
    description: "Electricity Bill",
    date: "June 30, 2025",
    amount: "-$120.00",
  },
];

export default function TransactionsCard() {
  return (
    <div className="bg-[#2A352A] text-[#EDEFED] p-4 sm:p-6 rounded-2xl shadow-sm">
      <h3 className="text-base sm:text-lg font-medium mb-4">Transactions</h3>

      <div className="space-y-3 overflow-x-auto">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-[#EDEFED]/10 pb-3 gap-2 sm:gap-0"
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm sm:text-base truncate">{tx.description}</p>
              <p className="text-xs sm:text-sm text-[#EDEFED]/70">{tx.date}</p>
            </div>
            <p
              className={`font-semibold text-sm sm:text-base flex-shrink-0 ${
                tx.amount.startsWith("-") ? "text-red-400" : "text-green-400"
              }`}
            >
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
