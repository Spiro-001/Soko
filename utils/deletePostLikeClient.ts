export const deletePostLikeClient = async (id: string) => {
  const res = await fetch(`/api/post-like/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "DELETE",
  });
  const commentLike: PostLikeType = await res.json();
  return commentLike;
};
