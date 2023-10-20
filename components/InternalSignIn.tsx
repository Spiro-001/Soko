"use client";

import { signIn } from "next-auth/react";
import React from "react";

const InternalSignIn = () => {
  const handleClick = () => {
    signIn("email", { password: "123" });
  };
  return <button onClick={handleClick}>InternalSignIn</button>;
};

export default InternalSignIn;
