export const getCommunityByIdServer = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/community/${id}`,
    {
      cache: process.env.CACHE_TYPE as RequestCache,
    }
  );
  const {
    communities,
    posts,
  }: { communities: MinimalCommunityType; posts: PostType[] } =
    await res.json();
  return { communities, posts };
};
