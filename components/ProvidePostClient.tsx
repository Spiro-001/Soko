"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPostClient } from "@/utils/getPostClient";
import Feed from "./Feed";

const ProvidePostClient = ({ session }: { session: Session | null }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [posts, setPosts] = useState<PostType[] | []>([]);

  useEffect(() => {
    const requestPost = async () => {
      const posts: PostType[] = await getPostClient(query ?? "");
      setPosts(posts);
    };
    requestPost();
  }, [query]);

  return <Feed posts={posts} session={session} />;
};

export default ProvidePostClient;
