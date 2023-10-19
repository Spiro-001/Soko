import Link from "next/link";
import React from "react";

const LogoNavBlock = () => {
  return (
    <Link href={"/"} className="whitespace-nowrap">
      <span className="font-bold text-xl">Soko Logo</span>
    </Link>
  );
};

export default LogoNavBlock;
