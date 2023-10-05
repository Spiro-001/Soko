export const createCommentClient = async (commentContent: NewCommentType) => {
  const res = await fetch("/api/comment", {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
    method: "POST",
    body: JSON.stringify(commentContent),
  });
  const comment: CommentType = await res.json();
  return comment;
};
