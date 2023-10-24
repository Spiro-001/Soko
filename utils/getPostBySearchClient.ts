export const getPostBySearchClient = async (query: string) => {
  const res = await fetch(
    `/api/search?blocked=[]&take=10&skip=0&query=${query}`,
    {
      cache: "no-store",
    }
  );
  if (res.ok) {
    const posts: PostType[] = await res.json();
    return posts;
  }
  return [];
};
