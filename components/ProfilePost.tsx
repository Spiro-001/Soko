"use client";

import React, { useState } from "react";
import Post from "./Post";
import FilterAndSortPost from "./FilterAndSortPost";
import ProfilePostSearch from "./ProfilePostSearch";

const ProfilePost = ({
  posts,
  session,
}: {
  posts: PostType[];
  session: Session;
}) => {
  const [postsState, setPostsState] = useState(posts);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between items-center border border-neutral-200 rounded-md shadow-sm">
        <FilterAndSortPost setPostsState={setPostsState} id={session.user.id} />
        <ProfilePostSearch setPostsState={setPostsState} />
      </div>
      {postsState.map((post) => (
        <Post
          post={post}
          session={session}
          setPostsState={setPostsState}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default ProfilePost;
