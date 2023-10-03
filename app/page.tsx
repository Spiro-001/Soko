import { getPostServer } from "@/utils/getPostServer";
import Post from "@/components/Post";
import React from "react";

export default async function Home() {
  const posts = await getPostServer("blocked=[]&skip=0&take=15");

  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4 flex flex-col items-center py-16 px-4 gap-4">
      {posts.map((post: PostType) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
