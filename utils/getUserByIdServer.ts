export const getUserByIdServer = async (id: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${id}`, {
    cache: (process.env.CACHE_TYPE as RequestCache) ?? "force-cache",
  });
  const user: UserType = await res.json();
  return user;
};
