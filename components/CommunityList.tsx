import { Add } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

const CommunityList = ({
  communities,
  setSelector,
}: {
  communities: MinimalCommunityType[];
  setSelector: Dispatch<SetStateAction<Record<string, string>>>;
}) => {
  const handleSelect = (community: MinimalCommunityType) => {
    setSelector({
      id: community.id,
      title: community.title,
    });
  };

  return (
    <div className="flex flex-col py-4 px-3">
      <div className="px-3">
        <span className="text-xs text-neutral-400 font-semibold">
          YOUR COMMUNITIES
        </span>
      </div>
      <div className="px-3 py-3 flex gap-x-4 items-center whitespace-nowrap hover:bg-neutral-100 rounded-md">
        <span className="w-8 h-8 rounded-full border-dashed flex justify-center items-center">
          <Add />
        </span>
        <Link href={"/new/community"}>Create Community</Link>
      </div>
      {communities.map((community) => (
        <div
          key={community.id}
          className="px-3 py-3 flex gap-x-4 items-center cursor-pointer hover:bg-neutral-100 rounded-md"
          onClick={(e) => handleSelect(community)}
        >
          <span className="w-8 h-8 border border-black rounded-full border-dashed">
            <Image
              src="/no-image.jpg"
              alt="no-image"
              height={32}
              width={32}
              className="rounded-full"
            />
          </span>
          <span>{community.title}</span>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
