"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Provider = ({
  session,
  children,
}: {
  session: Session | null;
  children: ReactNode;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
