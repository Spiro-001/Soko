"use client";

import GoogleOAuth from "@/components/GoogleOAuth";
import InternalSignIn from "@/components/InternalSignIn";
import React from "react";

const Login = () => {
  return (
    <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px]">
      Login page
      <InternalSignIn />
      <GoogleOAuth />
    </div>
  );
};

export default Login;
