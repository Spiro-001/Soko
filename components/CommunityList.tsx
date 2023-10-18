import Image from "next/image";
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
    <>
      <div className="px-3 py-3 flex gap-x-4 items-center whitespace-nowrap border-b border-gray-200 border-dashed">
        <div className="px-3 py-1 bg-neutral-200">Make a community</div>
      </div>
      {communities.map((community) => (
        <div
          key={community.id}
          className="px-3 py-3 flex gap-x-4 items-center"
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
    </>
  );
};

export default CommunityList;
