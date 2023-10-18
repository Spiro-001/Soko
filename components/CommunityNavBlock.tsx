"use client";

import { getCommunityClient } from "@/utils/getCommunityClient";
import React, { useState } from "react";
import CommunityList from "./CommunityList";

const CommunityNavBlock = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [communities, setCommunities] = useState<MinimalCommunityType[]>([]);
  const [selector, setSelector] = useState<Record<string, string>>({});

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

  return (
    <div className="flex flex-col relative">
      <button className="whitespace-nowrap" onClick={handleOpenCommunity}>
        My Communities
      </button>
      {open && (
        <div
          className="absolute top-full border border-black z-50 bg-white flex flex-col"
          onMouseLeave={handleOutside}
        >
          <CommunityList communities={communities} setSelector={setSelector} />
        </div>
      )}
    </div>
  );
};

export default CommunityNavBlock;
