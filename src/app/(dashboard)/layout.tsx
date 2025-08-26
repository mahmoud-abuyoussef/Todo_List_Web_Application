"use client";
import { useState } from "react";
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <>
      <Header setSidebarState={setSidebarState} />
      <div className="flex">
        <Sidebar sidebarState={sidebarState} />
        {children}
      </div>
    </>
  );
}
