"use client";

import { getCommunityClient } from "@/utils/getCommunityClient";
import React, { useEffect, useState } from "react";
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

  const handleOutside = async () => {
    setOpen(false);
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
      className={`flex flex-col relative bg-white shadow-sm px-6 py-2 ${
        open ? "rounded-t-md" : "rounded-md"
      }`}
      onClick={handleOpenCommunity}
    >
      <button className="whitespace-nowrap">
        <span>My Communities</span>
        <span className="ml-16">
          <ExpandMore />
        </span>
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 bg-white flex flex-col w-full rounded-b-md shadow-sm"
          onMouseLeave={handleOutside}
        >
          <CommunityList communities={communities} setSelector={setSelector} />
        </div>
      )}
    </div>
  );
};

export default CommunityNavBlock;
