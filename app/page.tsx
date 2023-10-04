import { getPostServer } from "@/utils/getPostServer";
import React from "react";
import Feed from "@/components/Feed";
import CommunityModal from "@/components/CommunityModal";

export default async function Home() {
  const posts = await getPostServer("blocked=[]&skip=0&take=15");

  return (
    <>
      <div className="border border-black row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:visible lg:flex hidden">
        <div className="sticky top-0 w-full">Left</div>
      </div>
      <div className="border border-black row-start-1 row-end-7 flex flex-col items-center pt-8 pb-16 px-4 gap-4 lg:col-start-2 lg:col-end-4 col-start-1 col-end-5">
        <Feed posts={posts} />
      </div>
      <div className="border border-black row-start-1 row-end-7 col-start-4 col-end-5 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:visible lg:flex hidden">
        <div className="sticky top-56 w-full">
          <CommunityModal />
        </div>
      </div>
    </>
  );
}
