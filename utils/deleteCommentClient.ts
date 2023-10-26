export const deleteCommentClient = async (id: string) => {
  const res = await fetch(`/api/comment/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "DELETE",
  });
  const comment: CommentType = await res.json();
  return comment;
};
