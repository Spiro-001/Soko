"use client";

import { getCommunityClient } from "@/utils/getCommunityClient";
import { useSearchParams } from "next/navigation";
import NewPost from "@/components/NewPost";
import React, { MouseEvent, useEffect, useState } from "react";
import CommunityList from "@/components/CommunityList";
import Image from "next/image";
import { ExpandMore } from "@mui/icons-material";

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

  const handleClose = (e: MouseEvent) => {
    const menu = document.getElementById("open-menu-community-submit");
    if (menu) {
      const onClickOutside = (event: any) => {
        if (!menu.contains(event.target)) {
          setOpen(false);
        }
        document.removeEventListener("mousedown", onClickOutside);
      };
      document.addEventListener("mousedown", onClickOutside);
    }
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
        id: selectedCommunityBySearchParam[0]?.id,
        title: selectedCommunityBySearchParam[0]?.title,
      });
    };
    getCommunityList();
  }, []);

  return (
    <div className="row-start-1 row-end-7 col-start-1 col-end-4 w-full mx-auto flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4">
      <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px] rounded-md bg-white shadow-sm">
        <div className="flex flex-col w-full gap-y-3">
          <span className="pt-4 pb-2 border-b border-neutral-200 w-full text-xl">
            Create a post
          </span>
          <div className="flex flex-col">
            <button
              className={`h-fit bg-white px-4 py-2.5 w-80 flex flex-col relative ${
                open ? "rounded-t-md" : "rounded-md"
              } shadow-sm border border-neutral-200`}
              onClick={handleOpenCommunity}
              onMouseLeave={handleClose}
            >
              <div className="flex gap-x-4 items-center w-full">
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
                <span className="ml-auto">
                  <ExpandMore />
                </span>
              </div>
              {open && (
                <div
                  className="absolute top-full border-x border-b w-full box-content border-neutral-200 z-50 bg-white flex flex-col rounded-b-md shadow-md"
                  style={{ left: -1 }}
                  id="open-menu-community-submit"
                >
                  <CommunityList
                    communities={communities}
                    setSelector={setSelector}
                  />
                </div>
              )}
            </button>
            <div className="flex w-full border border-neutral-200 rounded-tl-md rounded-tr-md mt-3">
              <button className="flex-1 border-r border-neutral-200 py-4">
                Post
              </button>
              <button className="flex-1 py-4">Image</button>
            </div>
            <NewPost type="post" selector={selector} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
