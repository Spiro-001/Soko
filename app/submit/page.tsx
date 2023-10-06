import NewPost from "@/components/NewPost";
import React from "react";

const Submit = () => {
  return (
    <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px] border border-black">
      <div className="flex flex-col w-full gap-y-3">
        <span className="py-4 border-b border-black w-full text-xl">
          Create a post
        </span>
        <div className="flex flex-col">
          <button className="h-fit bg-neutral-200 px-4 py-2.5 w-80 flex gap-x-2">
            <span className="h-full w-6 border border-black rounded-full border-dashed" />
            <span>Choose a community</span>
          </button>
          <div className="flex w-full border border-black rounded-tl-md rounded-tr-md mt-3">
            <button className="flex-1 border-r border-black py-4">Post</button>
            <button className="flex-1 py-4">Image</button>
          </div>
          <NewPost type="post" />
        </div>
      </div>
    </div>
  );
};

export default Submit;
