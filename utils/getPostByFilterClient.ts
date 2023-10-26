export const getPostByFilterClient = async (query: string = "") => {
  const res = await fetch(`/api/posts-by-filter?query=${query}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
  });
  const posts: PostType[] = await res.json();
  return posts;
};
