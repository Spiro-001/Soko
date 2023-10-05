import React from "react";
import LoadingPost from "./LoadingPost";

const LoadingPosts = ({ amount }: { amount: number }) => {
  const loadingPosts = new Array(amount);
  loadingPosts.fill(0);

  return (
    <div className="flex flex-col w-full gap-4 flex-1">
      <div className="border border-black flex">
        <span className="px-5 py-3">Create Post</span>
      </div>
      <div className="border border-black flex">
        <span className="px-5 py-3">Filter & Sort</span>
      </div>
      {loadingPosts.map((empty, idx) => (
        <LoadingPost key={idx} />
      ))}
    </div>
  );
};

export default LoadingPosts;
