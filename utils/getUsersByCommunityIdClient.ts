export const getUsersByCommunityIdClient = async (id: string) => {
  const res = await fetch(`/api/user`, {
    cache: (process.env.CACHE_TYPE as RequestCache) ?? "force-cache",
    method: "POST",
    body: JSON.stringify(id),
  });
  const users: { User: MinimalUserType }[] = await res.json();
  return users;
};
