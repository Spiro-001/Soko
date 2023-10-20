export const createCommunityClient = async (
  communityContent: NewCommunityType
) => {
  const res = await fetch("/api/community", {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "POST",
    body: JSON.stringify(communityContent),
  });
  const newCommunity: CommunityType = await res.json();
  return newCommunity;
};
