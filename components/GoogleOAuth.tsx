"use client";

import { signIn } from "next-auth/react";
import React from "react";

const GoogleOAuth = () => {
  const handleClick = () => {
    signIn("google");
  };
  return <button onClick={handleClick}>Sign in with Google</button>;
};

export default GoogleOAuth;
