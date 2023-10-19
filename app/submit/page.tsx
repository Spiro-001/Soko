"use client";

import { getCommunityClient } from "@/utils/getCommunityClient";
import { useSearchParams } from "next/navigation";
import NewPost from "@/components/NewPost";
import React, { useEffect, useState } from "react";
import CommunityList from "@/components/CommunityList";
import Image from "next/image";

const Submit = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [communities, setCommunities] = useState<MinimalCommunityType[]>([]);
  const [selector, setSelector] = useState<Record<string, string>>({
    id: "null",
    title: "Choose a community",
  });

  const searchParams = useSearchParams();

  const handleOpenCommunity = async () => {
    setOpen((prev) => !prev);
  };

  const handleOutside = async () => {
    setOpen(false);
  };

  useEffect(() => {
    const getCommunityList = async () => {
      const communities = await getCommunityClient(
        `interest=[]&blocked=[]&skip=0&take=${process.env.NEXT_PUBLIC_TAKE_COMMUNITY}&userId=`
      );
      setCommunities(communities);
      const selectedCommunityBySearchParam = communities.filter(
        (community) => community.id === searchParams.get("community")
      );
      setSelector({
        id: selectedCommunityBySearchParam[0].id,
        title: selectedCommunityBySearchParam[0].title,
      });
    };
    getCommunityList();
  }, []);

  return (
    <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px] border border-black">
      <div className="flex flex-col w-full gap-y-3">
        <span className="py-4 border-b border-black w-full text-xl">
          Create a post
        </span>
        <div className="flex flex-col">
          <button
            className="h-fit bg-neutral-200 px-4 py-2.5 w-80 flex flex-col relative"
            onClick={handleOpenCommunity}
          >
            <div className="flex gap-x-4 items-center">
              <span className="h-8 w-8 border border-black rounded-full border-dashed">
                <Image
                  src="/no-image.jpg"
                  alt="no-image"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
              </span>
              <span>{selector.title}</span>
            </div>
            {open && (
              <div
                className="absolute left-0 w-full top-full border border-black z-50 bg-white flex flex-col"
                onMouseLeave={handleOutside}
              >
                <CommunityList
                  communities={communities}
                  setSelector={setSelector}
                />
              </div>
            )}
          </button>
          <div className="flex w-full border border-black rounded-tl-md rounded-tr-md mt-3">
            <button className="flex-1 border-r border-black py-4">Post</button>
            <button className="flex-1 py-4">Image</button>
          </div>
          <NewPost type="post" selector={selector} />
        </div>
      </div>
    </div>
  );
};

export default Submit;
