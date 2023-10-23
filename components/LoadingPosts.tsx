import React from "react";
import LoadingPost from "./LoadingPost";
import Image from "next/image";
import { FiberNew, Photo, Star, Whatshot } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

const LoadingPosts = ({ amount }: { amount: number }) => {
  const loadingPosts = new Array(amount);
  loadingPosts.fill(0);

  return (
    <div className="flex flex-col w-full gap-4 flex-1">
      <div className="flex bg-white rounded-md shadow-sm">
        <div className="px-5 py-3 flex gap-x-4 items-center w-full">
          <Skeleton variant="circular" width={45} height={45} />
          <div className="flex-1">
            <input
              placeholder="Create Post"
              className="w-full border border-neutral-200 px-4 py-2 outline-none rounded-full hover:border-blue-600"
              disabled
            />
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <div className="flex bg-white rounded-md shadow-sm">
        <div className="px-5 py-3 flex gap-x-2">
          <button className="bg-blue-100 px-3 py-1 flex gap-x-2 rounded-md">
            <FiberNew sx={{ color: "purple" }} />
            <span>New</span>
          </button>
          <button className="px-3 py-1 flex gap-x-2 rounded-md">
            <Whatshot sx={{ color: "red" }} />
            <span>Hot</span>
          </button>
          <button className="px-3 py-1 flex gap-x-2 rounded-md">
            <Star sx={{ color: "gold" }} />
            <span>Top</span>
          </button>
        </div>
      </div>
      {loadingPosts.map((empty, idx) => (
        <LoadingPost key={idx} />
      ))}
    </div>
  );
};

export default LoadingPosts;
