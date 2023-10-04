import React from "react";
import Nav from "./Nav";
import { getUserByIdServer } from "@/utils/getUserByIdServer";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserByIdServer("94b54024-efdf-4379-b36c-f2331e8ff079");

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 grid grid-flow-row grid-rows-6 xl:grid-cols-[minmax(0px,_1fr)_minmax(0px,_960px)_minmax(0px,min-content)] grid-cols-[minmax(0px,_1fr)_minmax(0px,_960px)_minmax(0px,_1fr)]">
        {children}
      </div>
    </main>
  );
};

export default Layout;
