import Link from "next/link";
import React from "react";

const CommunityBlock = ({ community }: { community: MinimalCommunityType }) => {
  console.log(community);
  return (
    <Link
      href={community.id}
      className="border border-black w-full px-1 py-1 flex justify-between"
    >
      <div>
        <span>{community.title}</span>
        <span>{community._count.Members}</span>
      </div>
      <div className="flex gap-x-2">
        {community.tags.map((tag) => (
          <span key={community.id + tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
};

export default CommunityBlock;
