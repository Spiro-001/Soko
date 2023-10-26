export const patchCommentClient = async (
  id: string,
  commentContent: { content: string }
) => {
  const res = await fetch(`/api/comment/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "PATCH",
    body: JSON.stringify(commentContent),
  });
  const comment: CommentType = await res.json();
  return comment;
};
