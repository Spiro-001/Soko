import React from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";

const Feed = async ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="border border-black flex">
        <CreatePost />
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
