import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="bg-slate-50 py-6 px-12 flex justify-between items-center">
      <div>Soko</div>
      <div className="flex gap-x-2 items-center">
        <Link href="/communities" className="px-3 py-1 bg-slate-200">
          Communities
        </Link>
        <button>profile picture</button>
      </div>
    </div>
  );
};

export default Nav;
