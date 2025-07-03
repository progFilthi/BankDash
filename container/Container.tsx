import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/page";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-0">
        <Navbar />
        <main className="bg-[#EDEFED] flex-1 p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
