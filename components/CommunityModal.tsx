import React from "react";
import CommunityBlock from "./CommunityBlock";
import { getCommunityServer } from "@/utils/getCommunityServer";

const CommunityModal = async () => {
  const communities = await getCommunityServer(
    `interest=[]&blocked=[]&skip=0&take=${process.env.NEXT_PUBLIC_TAKE_COMMUNITY}&userId=`
  );

  return (
    <div className="flex-col justify-center py-4 px-3 gap-y-2 flex rounded-md shadow-sm bg-gray-200">
      <span className="text-sm font-semibold w-fit ml-auto">
        YOUR COMMUNITIES
      </span>
      {communities.map((community) => (
        <CommunityBlock key={community.id} community={community} />
      ))}
    </div>
  );
};

export default CommunityModal;
