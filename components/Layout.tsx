import React from "react";
import Nav from "./Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-4">
        {children}
      </div>
    </main>
  );
};

export default Layout;
