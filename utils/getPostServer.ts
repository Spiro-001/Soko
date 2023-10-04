export const getPostServer = async (query: string = "") => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?${query}`, {
    cache: (process.env.CACHE_TYPE as RequestCache) ?? "force-cache",
  });
  const posts: PostType[] = await res.json();
  return posts;
};
