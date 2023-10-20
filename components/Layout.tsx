import React from "react";
import Nav from "./Nav";
import { getUserByIdServer } from "@/utils/getUserByIdServer";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Login from "./Login";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserByIdServer("94b54024-efdf-4379-b36c-f2331e8ff079");
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <main className="min-h-screen flex flex-col bg-neutral-100">
        <Nav session={session} />
        <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4">
          {children}
        </div>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen flex flex-col bg-neutral-100">
        <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4">
          <Login />
        </div>
      </main>
    );
  }
};

export default Layout;
