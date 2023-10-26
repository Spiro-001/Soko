"use client";

import { AccountCircle, ExpandMore, Settings } from "@mui/icons-material";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

const ProfileNavBlock = ({ session }: { session: Session | null }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (e: MouseEvent) => {
    const menu = document.getElementById("open-menu-profile");
    if (menu) {
      const onClickOutside = (event: any) => {
        if (!menu.contains(event.target)) {
          setOpen(false);
        }
        document.removeEventListener("mousedown", onClickOutside);
      };
      document.addEventListener("mousedown", onClickOutside);
    }
  };

  return (
    <div className="relative">
      <button
        className={`flex gap-x-2 items-center px-3 py-1 ${
          open ? "rounded-t-md border-t border-x" : "rounded-md border"
        } bg-white shadow-sm  border-neutral-100`}
        onClick={handleOpen}
        onMouseLeave={handleClose}
      >
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
      {open && (
        <ul
          className="absolute top-full bg-white w-full px-2 py-2 flex flex-col rounded-b-md border-neutral-100 border-x border-b shadow-md box-border text-sm"
          id="open-menu-profile"
        >
          <li className="flex">
            <Link
              href="/profile"
              className="py-2 flex gap-x-4 px-3 rounded-md items-center h-fit hover:bg-neutral-200 w-full"
            >
              <AccountCircle sx={{ color: "rgb(5 5 5)" }} />
              <span>Profile</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/settings"
              className="py-2 flex gap-x-4 px-3 rounded-md items-center h-fit hover:bg-neutral-200 w-full"
            >
              <Settings sx={{ color: "rgb(5 5 5)" }} />
              <span>Settings</span>
            </Link>
          </li>
          <li className="flex">
            <SignOutButton />
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileNavBlock;
