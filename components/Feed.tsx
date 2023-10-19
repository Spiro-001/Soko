"use client";

import React, { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";

const Feed = ({ posts }: { posts: PostType[] }) => {
  const [postsState, setPostsState] = useState<PostType[]>(posts);
  console.log(postsState);

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="border border-black flex">
        <CreatePost />
      </div>
      <div className="border border-black flex">
        <span className="px-5 py-3">Filter & Sort</span>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        {postsState.map((post: PostType) => (
          <Post post={post} key={post.id} setPostsState={setPostsState} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
