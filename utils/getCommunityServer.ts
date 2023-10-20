export const getCommunityServer = async (query: string = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/community?${query}`,
    {
      cache: process.env.CACHE_TYPE as RequestCache,
    }
  );
  if (res.ok) {
    const communities: MinimalCommunityType[] = await res.json();
    return communities;
  }
  return [];
};
