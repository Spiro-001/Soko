import React from "react";
import Nav from "./Nav";
import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Provider from "./Provider";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <Provider session={session}>
      <main className="min-h-screen flex flex-col bg-neutral-100">
        <Nav session={session} />
        <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)]">
          {children}
        </div>
      </main>
    </Provider>
  );
};

export default Layout;
