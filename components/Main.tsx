import { getPostServer } from "@/utils/getPostServer";
import React from "react";
import Post from "./Post";

const Main = async () => {
  const posts = await getPostServer(
    'allowed=["2991d2ce-b2f1-4c4e-8b0f-095fc6dc70a0"]&blocked=[]'
  );
  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4 flex flex-col items-center py-16 px-4">
      {posts.map((post: PostType) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Main;
