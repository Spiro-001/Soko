export const deletePostLikeClient = async (id: string) => {
  const res = await fetch(`/api/post-like/${id}`, {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
    method: "DELETE",
  });
  const commentLike: PostLikeType = await res.json();
  return commentLike;
};
