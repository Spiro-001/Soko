import React from "react";
import Nav from "./Nav";
import { getUserByIdServer } from "@/utils/getUserByIdServer";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserByIdServer("94b54024-efdf-4379-b36c-f2331e8ff079");

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4">
        {children}
      </div>
    </main>
  );
};

export default Layout;
