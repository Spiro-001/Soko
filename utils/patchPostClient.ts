export const patchPostClient = async (
  id: string,
  postContent: { headline: string; content: string }
) => {
  const res = await fetch(`/api/post/${id}`, {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "PATCH",
    body: JSON.stringify(postContent),
  });
  const post: PostType = await res.json();
  return post;
};
