import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import Login from "./Login";

const Provider = async ({ children }: { children: ReactNode }) => {
  const session = (await getServerSession(authOptions)) as Session;

  console.log(session);

  if (!session) {
    return (
      <main className="min-h-screen flex flex-col bg-neutral-100">
        <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)]">
          <Login />
        </div>
      </main>
    );
  } else {
    return <SessionProvider session={session}>{children}</SessionProvider>;
  }
};

export default Provider;
