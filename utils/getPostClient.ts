export const getPostClient = async (query: string = "") => {
  const res = await fetch(`/api/search?query=${query}`, {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
  });
  const posts: PostType[] = await res.json();
  return posts;
};
