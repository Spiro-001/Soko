"use client";

import { getPostByFilterClient } from "@/utils/getPostByFilterClient";
import { FiberNew, Star, Whatshot } from "@mui/icons-material";
import React, { Dispatch, SetStateAction, useState } from "react";

const FilterAndSortPost = ({
  id,
  setPostsState,
}: {
  id: string;
  setPostsState: Dispatch<SetStateAction<PostType[]>>;
}) => {
  const [lastFilter, setLastFilter] = useState("new");
  const handleFilterSort = async (by: string) => {
    setLastFilter(by);
    setPostsState([]);
    const filteredPosts = await getPostByFilterClient(
      `blocked=[]&skip=0&take=${process.env.NEXT_PUBLIC_TAKE_POST}&by=${by}&id=${id}`
    );
    setPostsState(filteredPosts);
  };
  return (
    <div className="px-5 py-3 flex gap-x-2">
      {/* New post based on date */}
      <button
        onClick={(e) => (lastFilter !== "new" ? handleFilterSort("new") : null)}
        className={`${
          lastFilter === "new" ? "bg-blue-100" : "bg-none"
        } px-3 py-1 flex gap-x-2 rounded-md`}
      >
        <FiberNew sx={{ color: "purple" }} />
        <span>New</span>
      </button>
      {/* Hot -> lots of recent comments and discussion */}
      <button
        onClick={(e) => (lastFilter !== "hot" ? handleFilterSort("hot") : null)}
        className={`${
          lastFilter === "hot" ? "bg-blue-100" : "bg-none"
        } px-3 py-1 flex gap-x-2 rounded-md`}
      >
        <Whatshot sx={{ color: "red" }} />
        <span>Hot</span>
      </button>
      {/* Top rated */}
      <button
        onClick={(e) => (lastFilter !== "top" ? handleFilterSort("top") : null)}
        className={`${
          lastFilter === "top" ? "bg-blue-100" : "bg-none"
        } px-3 py-1 flex gap-x-2 rounded-md`}
      >
        <Star sx={{ color: "gold" }} />
        <span>Top</span>
      </button>
    </div>
  );
};

export default FilterAndSortPost;
