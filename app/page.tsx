import { getPostServer } from "@/utils/getPostServer";
import React from "react";
import Feed from "@/components/Feed";
import CommunityModal from "@/components/CommunityModal";

export default async function Home() {
  const posts = await getPostServer("blocked=[]&skip=0&take=15");

  return (
    <>
      <div className="row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 gap-4 xl:flex hidden w-full">
        {/* <div className="sticky top-56"></div> */}
      </div>
      <div className="row-start-1 row-end-7 pt-8 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4">
        <Feed posts={posts} />
      </div>
      <div className="row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden max-w-[480px]">
        <div className="top-56 sticky">
          <CommunityModal />
        </div>
      </div>
    </>
  );
}
