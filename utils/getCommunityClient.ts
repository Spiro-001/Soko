export const getCommunityClient = async (query: string = "") => {
  const res = await fetch(`/api/community?${query}`, {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
  });
  const communities: MinimalCommunityType[] = await res.json();
  return communities;
};
