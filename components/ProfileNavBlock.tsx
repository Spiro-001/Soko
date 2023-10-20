import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const ProfileNavBlock = ({ session }: { session: Session | null }) => {
  return (
    <button className="flex gap-x-2 items-center px-3 py-1 rounded-md bg-white shadow-sm border border-neutral-100">
      <span className="w-6 h-6 rounded-full">
        <Image
          src={session?.user?.image ?? "/no-profile.png"}
          width={24}
          height={24}
          alt="profile"
          className="border border-black rounded-full"
        />
      </span>
      <div className="flex flex-col">
        <span className="text-xs font-semibold w-fit">
          {session?.user?.username}
        </span>
        <span className="text-xs whitespace-nowrap">1 Reputation</span>
      </div>
      <span className="ml-8">
        <ExpandMore />
      </span>
    </button>
  );
};

export default ProfileNavBlock;
