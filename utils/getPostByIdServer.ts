export const getPostByIdServer = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`,
    {
      cache: "no-store",
    }
  );
  if (res.ok) {
    const post: PostByIdType = await res.json();
    return post;
  }
  return null;
};
