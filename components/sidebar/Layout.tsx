import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenProps) {
  return <div>{children}</div>;
}
