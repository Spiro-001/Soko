import { getPostServer } from "@/utils/getPostServer";
import Post from "@/components/Post";
import React from "react";
import Search from "@/components/Search";
import Feed from "@/components/Feed";

export default async function Home() {
  const posts = await getPostServer("blocked=[]&skip=0&take=15");

  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4 flex flex-col items-center pt-8 pb-16 px-4 gap-4">
      <Feed posts={posts} />
    </div>
  );
}
