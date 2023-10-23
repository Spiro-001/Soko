"use client";

import { Logout } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-neutral-200 py-2 flex gap-x-4 px-3 rounded-md items-center w-full"
    >
      <Logout />
      <span>Log Out</span>
    </button>
  );
};

export default SignOutButton;
