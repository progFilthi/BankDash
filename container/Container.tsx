import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/page";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="bg-[#EDEFED] h-full p-8">{children}</main>
      </div>
    </div>
  );
}
