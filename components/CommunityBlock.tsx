import Link from "next/link";
import React from "react";

const CommunityBlock = ({ community }: { community: MinimalCommunityType }) => {
  return (
    <Link
      href={`/community/${community.id}`}
      className="border border-black w-full px-2 py-2 flex flex-col justify-between gap-y-2"
    >
      <div className="flex gap-x-3 items-center my-auto justify-between">
        <p className="bg-zinc-400 text-zinc-50 text-center px-2 h-fit">
          {community.title}
        </p>
        <span className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
          {community.description}
        </span>
      </div>
      <div className="flex justify-between items-end whitespace-nowrap">
        <span className="text-sm">
          {community._count.Members} Member
          {community._count.Members > 1 ? "s" : ""}
        </span>
        {/* <div className="gap-x-2 gap-y-2 justify-end flex flex-wrap">
          {community.tags.map((tag) => (
            <span key={community.id + tag} className="bg-slate-100 px-2">
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </Link>
  );
};

export default CommunityBlock;
