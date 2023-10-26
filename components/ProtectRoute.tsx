"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const ProtectRoute = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) => {
  return <div>{children}</div>;
};

export default ProtectRoute;
