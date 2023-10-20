"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LogoNavBlock = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.refresh();
    router.push("/");
  };
  return (
    <button className="whitespace-nowrap" onClick={handleRoute}>
      <span className="font-bold text-xl text-sky-400">@BASEMENT</span>
    </button>
  );
};

export default LogoNavBlock;
