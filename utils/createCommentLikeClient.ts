export const createCommentLikeClient = async (
  userId: string,
  commentId: string
) => {
  const res = await fetch("/api/comment-like", {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "POST",
    body: JSON.stringify({ userId, commentId }),
  });
  const commentLike: CommentLikeType = await res.json();
  return commentLike;
};
