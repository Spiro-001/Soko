"use client";

import React, { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import FilterAndSortPost from "./FilterAndSortPost";
import { CircularProgress } from "@mui/material";

const Feed = ({
  posts,
  session,
}: {
  posts: PostType[];
  session: Session | null;
}) => {
  const [postsState, setPostsState] = useState<PostType[]>(posts);
  const [loading, setLoading] = useState(false);

  const renderPosts = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-8">
          <CircularProgress />
        </div>
      );
    } else {
      if (postsState.length === 0) {
        return (
          <div className="flex items-center justify-center py-14 text-lg text-neutral-500">
            {"There's nothing here right now. Come back later!"}
          </div>
        );
      } else {
        return postsState.map((post) => (
          <Post
            post={post}
            session={session}
            setPostsState={setPostsState}
            key={post.id}
          />
        ));
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex bg-white rounded-md shadow-sm border border-neutral-200">
        <CreatePost session={session} />
      </div>
      <div className="flex rounded-md shadow-sm bg-white border border-neutral-200">
        <FilterAndSortPost
          setPostsState={setPostsState}
          id=""
          setLoading={setLoading}
        />
      </div>
      <div className="flex flex-col items-center gap-y-4">{renderPosts()}</div>
    </div>
  );
};

export default Feed;
