export const createPostLikeClient = async (userId: string, postId: string) => {
  const res = await fetch("/api/post-like", {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
    method: "POST",
    body: JSON.stringify({ userId, postId }),
  });
  const postLike: PostLikeType = await res.json();
  return postLike;
};
