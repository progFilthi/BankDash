import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#4D604C] text-[#EDEFED] shadow-lg">
      <nav className="flex items-center h-[60px]">
        <div className="px-[32px] flex items-center w-full justify-between">
          <div className="flex items-center justify-center space-x-2">
            {/* <span className="opacity-50">Page /</span> */}
            <Link href={"/dashboard"}>
              <h1 className="font-medium">Dashboard</h1>
            </Link>
          </div>
          <div className="flex items-center gap-[24px]">
            <BellIcon height={20} />
            <Image
              src={"/avator.svg"}
              alt="avator"
              width={45}
              height={45}
              className="cursor-pointer w-8"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
