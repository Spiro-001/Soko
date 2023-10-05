import React from "react";
import Post from "./Post";

const Feed = async ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="border border-black flex">
        <span className="px-5 py-3">Create Post</span>
      </div>
      <div className="border border-black flex">
        <span className="px-5 py-3">Filter & Sort</span>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        {posts.map((post: PostType) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
