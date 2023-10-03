import { Skeleton } from "@mui/material";
import React from "react";

const LoadingPost = () => {
  return (
    <section className="flex flex-col border border-black px-8 py-6 w-full gap-y-4 rounded-sm">
      <div className="flex gap-2 items-center">
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={150} />
      </div>
      <Skeleton
        variant="rounded"
        sx={{ fontSize: "1.5rem" }}
        className="px-4 py-2"
        height={100}
      />
      <div className="ml-auto flex gap-2">
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
      </div>
    </section>
  );
};

export default LoadingPost;
