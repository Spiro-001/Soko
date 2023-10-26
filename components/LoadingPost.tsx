import { Skeleton } from "@mui/material";
import React from "react";

const LoadingPost = () => {
  return (
    <section className="flex flex-col px-4 py-4 w-full gap-y-6 rounded-md bg-white shadow-sm border border-neutral-200">
      <div className="flex gap-2 items-center">
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={150} />
      </div>
      <Skeleton
        variant="rounded"
        sx={{ fontSize: "1.5rem" }}
        className="px-4 py-2"
        height={35}
      />
      <Skeleton
        variant="rounded"
        sx={{ fontSize: "1.5rem" }}
        className="px-4 py-2"
        height={100}
      />
      <div className="ml-auto flex gap-2">
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} width={50} />
      </div>
    </section>
  );
};

export default LoadingPost;
