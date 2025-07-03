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
    <div className="bg-[#2A352A] text-[#EDEFED] p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-medium mb-4">Transactions</h3>

      <ul className="space-y-3">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className="flex justify-between items-center border-b border-[#EDEFED]/10 pb-2"
          >
            <div>
              <p className="font-medium">{tx.description}</p>
              <p className="text-sm text-[#EDEFED]/70">{tx.date}</p>
            </div>
            <p
              className={`font-semibold ${
                tx.amount.startsWith("-") ? "text-red-400" : "text-green-400"
              }`}
            >
              {tx.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
