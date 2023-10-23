"use client";

import React, { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import FilterAndSortPost from "./FilterAndSortPost";

const Feed = ({
  posts,
  session,
}: {
  posts: PostType[];
  session: Session | null;
}) => {
  const [postsState, setPostsState] = useState<PostType[]>(posts);
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex bg-white rounded-md shadow-sm">
        <CreatePost session={session} />
      </div>
      <div className="flex rounded-md shadow-sm bg-white">
        <FilterAndSortPost setPostsState={setPostsState} />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        {postsState.map((post: PostType) => (
          <Post
            post={post}
            key={post.id}
            setPostsState={setPostsState}
            session={session}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
