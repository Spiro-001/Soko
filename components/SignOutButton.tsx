"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };

  return <button onClick={handleClick}>SignOutButton</button>;
};

export default SignOutButton;
