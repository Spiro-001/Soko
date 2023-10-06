import Feed from "@/components/Feed";
import { getCommunityByIdServer } from "@/utils/getCommunityByIdServer";
import Image from "next/image";
import React from "react";

const Community = async ({ params }: { params: { communityId: string } }) => {
  const data = await getCommunityByIdServer(params.communityId);
  const community = data.communities;
  const posts = data.posts;

  return (
    <div className="row-start-1 row-end-7 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex lg:min-w-[960px]">
      <div className="flex flex-col bg-neutral-100 flex-1">
        <div className="h-56 w-full flex relative">
          <Image
            src="/no-community-image.jpg"
            alt="community-picture"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col px-8 py-6 gap-y-2">
          <div>
            <div className="flex gap-x-4 items-center">
              <span className="text-5xl font-bold">{community.title}</span>
              <div className="bg-neutral-200 px-2 py-1">
                <span>{community._count.Members} Member</span>
                <span>{community._count.Members > 1 ? "s" : ""}</span>
              </div>
            </div>
            <span className="text-neutral-400 text-sm">
              {community.description}
            </span>
          </div>
          <div className="py-6 flex flex-col gap-y-2">
            <div>
              <Feed posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
