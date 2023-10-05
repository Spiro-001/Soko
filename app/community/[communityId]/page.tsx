import { getCommunityByIdServer } from "@/utils/getCommunityByIdServer";
import React from "react";

const Community = async ({ params }: { params: { communityId: string } }) => {
  const community = await getCommunityByIdServer(params.communityId);

  return (
    <div className="border border-black row-start-1 row-end-7 flex flex-col pt-8 pb-16 px-4 gap-4 col-start-2 col-end-3">
      <span>{community.title}</span>
      <span>{community.description}</span>
      <span>{community._count.Members}</span>
      <div>
        {community.tags.map((tag) => (
          <span key={community.id + tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Community;
