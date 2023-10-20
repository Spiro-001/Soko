export const getCommunityByIdServer = async (id: string) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/community/${id}`, {
    cache: process.env.CACHE_TYPE as RequestCache,
  });
  const {
    communities,
    posts,
  }: { communities: MinimalCommunityType; posts: PostType[] } =
    await res.json();
  return { communities, posts };
};
