export const getCommunityServer = async (query: string = "") => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/community?${query}`, {
    cache: process.env.CACHE_TYPE as RequestCache,
  });
  const communities: MinimalCommunityType[] = await res.json();
  return communities;
};
