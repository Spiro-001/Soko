export const deleteCommentLikeClient = async (id: string) => {
  const res = await fetch(`/api/comment-like/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "DELETE",
  });
  const commentLike: CommentLikeType = await res.json();
  return commentLike;
};
