export const deletePostClient = async (id: string) => {
  const res = await fetch(`/api/post/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "DELETE",
  });
  const post: PostType = await res.json();
  return post;
};
