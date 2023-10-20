export const getPostServer = async (query: string = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?${query}`,
    {
      cache: process.env.CACHE_TYPE as RequestCache,
    }
  );
  const posts: PostType[] = await res.json();
  return posts;
};
