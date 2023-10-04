import React from "react";
import CommunityBlock from "./CommunityBlock";

const CommunityModal = () => {
  return (
    <div className="border border-black flex flex-col items-center py-4 px-3 gap-y-2">
      <CommunityBlock />
      <CommunityBlock />
      <CommunityBlock />
      <CommunityBlock />
      <CommunityBlock />
    </div>
  );
};

export default CommunityModal;
