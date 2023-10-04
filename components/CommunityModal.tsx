import React from "react";
import CommunityBlock from "./CommunityBlock";
import { getCommunityServer } from "@/utils/getCommunityServer";

const CommunityModal = async () => {
  const communities = await getCommunityServer(
    "interest=[]&blocked=[]&skip=0&take=5"
  );

  return (
    <div className="border border-black flex-col items-center py-4 px-3 gap-y-2 flex">
      {communities.map((community) => (
        <CommunityBlock key={community.id} community={community} />
      ))}
    </div>
  );
};

export default CommunityModal;
