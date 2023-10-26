"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import GoogleOAuth from "./GoogleOAuth";
import InternalSignIn from "./InternalSignIn";

const Login = () => {
  const pathName = usePathname();
  const router = useRouter();
  if (pathName !== "/login") router.push("/login");

  return (
    <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px]">
      Login page
      <InternalSignIn />
      <GoogleOAuth />
    </div>
  );
};

export default Login;
