"use client";

import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import Login from "./Login";

const ProtectRoute = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  console.log(session);
  if (session.status === "unauthenticated") {
    return (
      <main className="min-h-screen flex flex-col bg-neutral-100">
        <div className="flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)]">
          <Login />
        </div>
      </main>
    );
  } else if (session.status === "authenticated") {
    return <div>{children}</div>;
  }
};

export default ProtectRoute;
