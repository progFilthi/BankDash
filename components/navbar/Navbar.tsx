import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#4D604C] text-[#EDEFED] shadow-lg">
      <nav className="flex items-center h-[60px]">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center w-full justify-between">
          <div className="flex items-center justify-center space-x-2 lg:ml-0 ml-12">
            <Link href={"/dashboard"}>
              <h1 className="font-medium text-sm sm:text-base">Dashboard</h1>
            </Link>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <BellIcon height={18} className="sm:h-5 sm:w-5" />
            <Image
              src={"/avator.svg"}
              alt="avator"
              width={32}
              height={32}
              className="cursor-pointer w-6 sm:w-7 lg:w-8"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
