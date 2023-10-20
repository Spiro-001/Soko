export const getPostByIdServer = async (id: string) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/post/${id}`, {
    cache: "no-store",
  });
  const post: PostByIdType = await res.json();
  return post;
};
