import { getCommunityByIdServer } from "@/utils/getCommunityByIdServer";
import Feed from "@/components/Feed";
import MembersList from "@/components/Members";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import { redirect } from "next/navigation";

const Community = async ({ params }: { params: { communityId: string } }) => {
  const data = await getCommunityByIdServer(params.communityId);
  const session = (await getServerSession(authOptions)) as Session;
  if (!data) return redirect("/");

  const community = data.communities;
  const posts = data.posts;
  return (
    <div
      className="row-start-1 row-end-7 col-start-1 col-end-4 w-full mx-auto flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4"
      style={{
        backgroundImage: 'url("/background-seamless.png")',
      }}
    >
      <div className="row-start-1 row-end-7 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex lg:min-w-[960px] shadow-md">
        <div className="flex flex-col bg-neutral-100 flex-1 rounded-md px-4 py-4">
          <div className="h-56 w-full flex relative rounded-md">
            <Image
              src="/no-community-image.jpg"
              alt="community-picture"
              className="object-cover rounded-md"
              fill
            />
          </div>
          <div className="flex flex-col py-6 gap-y-1">
            <div className="bg-white rounded-md shadow-sm px-4 py-4 border border-neutral-200">
              <div className="flex gap-x-4 items-center">
                <span className="text-3xl md:text-5xl font-bold whitespace-nowrap">
                  {community.title}
                </span>
                <div className="bg-green-400 text-white font-semibold px-3 py-1 rounded-md">
                  <MembersList community={community} session={session} />
                </div>
              </div>
              <span className="text-neutral-400 text-sm">
                {community.description}
              </span>
            </div>
            <div className="py-3 flex flex-col gap-y-2">
              <div>
                <Feed posts={posts} session={session} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
