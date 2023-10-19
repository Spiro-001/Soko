import { ExpandMore } from "@mui/icons-material";
import React from "react";

const ProfileNavBlock = () => {
  return (
    <button className="flex gap-x-2 items-center px-3 py-1 rounded-md bg-white shadow-sm">
      <span className="w-6 h-6 border border-black border-dashed rounded-full"></span>
      <div className="flex flex-col">
        <span className="text-xs font-semibold">__username__</span>
        <span className="text-xs">1 Reputation</span>
      </div>
      <span className="ml-8">
        <ExpandMore />
      </span>
    </button>
  );
};

export default ProfileNavBlock;
