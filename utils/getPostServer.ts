export const getPostServer = async (query: string = "") => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?${query}`, {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};
