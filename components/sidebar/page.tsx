"use client";
import {
  LayoutDashboardIcon,
  SettingsIcon,
  CircleUserRoundIcon,
  LandmarkIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const sidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard/overview",
    icon: LayoutDashboardIcon,
  },
  {
    label: "Accounts",
    href: "/dashboard/accounts",
    icon: CircleUserRoundIcon,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: LandmarkIcon,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#4D604C] text-[#EDEFED] p-2 rounded-md hover:cursor-pointer transition-colors duration-300"
      >
        {isMobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-80  z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`bg-[#4D604C] flex flex-col space-y-8 text-[#EDEFED] h-screen transition-transform duration-300 z-40
        ${
          isMobileMenuOpen
            ? "fixed left-0 top-0 w-[270px] transform translate-x-0"
            : "fixed left-0 top-0 w-[270px] transform -translate-x-full lg:transform-none lg:relative lg:translate-x-0"
        }
        lg:w-[270px]`}
      >
        {/** Logo */}
        <Link href={"/"}>
          <div className="flex items-center pt-4 px-4 gap-1">
            <Image
              src="/logo.svg"
              alt="BankDash Logo"
              width={48}
              height={48}
              className="w-8"
          />
          <h1 className="text-[24px] font-semibold">BankDash</h1>
        </div>
      </Link>
      {/*Links & btn container*/}
      <div className="flex flex-col h-full justify-between">
        {/** Links */}
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center py-4 px-8 space-x-2 transition-all duration-300 ${
                  isActive ? "bg-[#374436] font-semibold" : "hover:bg-[#374436]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon height={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
        {/** Logout Button */}
        <div className="space-y-4">
          <hr className="opacity-60" />
          <div className="flex items-center justify-between text-end mb-16 mx-4">
            <div className="flex items-center space-x-2">
              <Image
                src={"/avator.svg"}
                alt="avator"
                width={45}
                height={45}
                className="cursor-pointer w-10"
              />
              <div className="flex flex-col items-start ">
                <h3 className="text-sm font-semibold">Emmanuel Francis</h3>
                <p className="text-xs opacity-60">gamerfilthi@gmail.com</p>
              </div>
            </div>
            <LogOutIcon className="cursor-pointer" height={20} />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
