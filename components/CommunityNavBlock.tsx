"use client";

import { getCommunityClient } from "@/utils/getCommunityClient";
import React, { MouseEvent, useEffect, useState } from "react";
import CommunityList from "./CommunityList";
import { usePathname, useRouter } from "next/navigation";
import { ExpandMore } from "@mui/icons-material";

const CommunityNavBlock = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [communities, setCommunities] = useState<MinimalCommunityType[]>([]);
  const [selector, setSelector] = useState<Record<string, string>>({
    id: "none",
  });

  const router = useRouter();
  const pathName = usePathname();

  const handleOpenCommunity = async () => {
    setOpen((prev) => !prev);
    if (communities.length === 0) {
      const communities = await getCommunityClient(
        `interest=[]&blocked=[]&skip=0&take=${process.env.NEXT_PUBLIC_TAKE_COMMUNITY}&userId=`
      );
      setCommunities(communities);
    }
  };

  const handleOutside = (e: MouseEvent) => {
    const menu = document.getElementById("open-menu-community");
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

  useEffect(() => {
    setOpen(false);
    if (selector.id !== "none") {
      router.push(`/community/${selector.id}`);
    }
  }, [selector]);

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <div
      className={`flex flex-col relative bg-white shadow-sm border border-neutral-100 px-6 py-2 m-0 ${
        open ? "rounded-t-md" : "rounded-md"
      }`}
      onClick={handleOpenCommunity}
      onMouseLeave={handleOutside}
    >
      <button className="whitespace-nowrap">
        <span>My Communities</span>
        <span className="ml-16">
          <ExpandMore />
        </span>
      </button>
      {open && (
        <div
          className="absolute top-full z-50 bg-white flex border-x border-b border-neutral-100 flex-col flex-1 rounded-b-md shadow-sm w-full box-content"
          style={{ left: -1 }}
          id="open-menu-community"
        >
          <CommunityList communities={communities} setSelector={setSelector} />
        </div>
      )}
    </div>
  );
};

export default CommunityNavBlock;
