// import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/page";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <header>{/* <Navbar /> */}</header>
      <main>{children}</main>
    </div>
  );
}
