export const getCommunityByIdServer = async (id: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/community/${id}`, {
    cache: (process.env.CACHE_TYPE as RequestCache) ?? "force-cache",
  });
  const communities: MinimalCommunityType = await res.json();
  return communities;
};
