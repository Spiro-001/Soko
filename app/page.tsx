import { getPostServer } from "@/utils/getPostServer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import React from "react";
import Feed from "@/components/Feed";
import CommunityModal from "@/components/CommunityModal";
import LoadingPosts from "@/components/LoadingPosts";

export default async function Home() {
  const posts = await getPostServer(
    `blocked=[]&skip=0&take=${process.env.NEXT_PUBLIC_TAKE_POST}`
  );
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden"></div>
      <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px]">
        <Feed posts={posts} session={session} />
        {/* <LoadingPosts amount={10} /> */}
      </div>
      <div className="row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden max-w-[360px] xl:max-w-[480px]">
        <div className="top-56 sticky w-full">
          <CommunityModal />
        </div>
      </div>
    </>
  );
}
