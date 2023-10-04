"use client";

import React from "react";
import Post from "./Post";

const Feed = ({ posts }: { posts: PostType[] }) => {
  return posts.map((post: PostType) => <Post post={post} key={post.id} />);
};

export default Feed;
