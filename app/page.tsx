import { getPostServer } from "@/utils/getPostServer";
import Post from "@/components/Post";
import React from "react";

export default async function Home() {
  const posts = await getPostServer(
    'allowed=["2991d2ce-b2f1-4c4e-8b0f-095fc6dc70a0"]&blocked=[]&skip=0&take=1'
  );

  function later(delay: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }

  await later(2000);

  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4 flex flex-col items-center py-16 px-4 gap-4">
      {posts.map((post: PostType) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
