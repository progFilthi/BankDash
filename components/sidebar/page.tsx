"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  {
    label: "Overview",
    icon: "/dashboard-square-01.svg",
    href: "/dashboard/overview",
  },
  {
    label: "Accounts",
    icon: "/user-circle.svg",
    href: "/dashboard/accounts",
  },
  {
    label: "Transactions",
    icon: "/bitcoin-transaction.svg",
    href: "/dashboard/transactions",
  },
  {
    label: "Settings",
    icon: "/settings-01.svg",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  // redirect("/dashboard/overview");

  return (
    <nav className="bg-[#4D604C] w-[300px] h-screen  text-[#EDEFED]">
      {/** Logo */}
      <div className="flex items-center py-[8px] px-[8px] gap-[16px]">
        <Image
          src="/logo.svg"
          alt="BankDash Logo"
          width={48}
          height={48}
          className="w-[48px] h-[48px]"
        />
        <h1 className="text-[24px] font-semibold">BankDash</h1>
      </div>
      {/** Links */}
      <div className="flex flex-col mt-[64px]">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center justify-start gap-[2px] py-[16px]  transition-all duration-300 ${
                isActive ? "bg-[#374436] font-semibold" : "hover:bg-[#374436]"
              }`}
            >
              <Image
                src={link.icon}
                alt="icon"
                width={48}
                height={48}
                className="h-6"
              />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
      {/** Logout Button */}
      <div className=" mt-[144px]">
        <button
          type="button"
          className="bg-[#374436] p-[10px] rounded-[8px] cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
