export const getUserByIdServer = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`,
    {
      cache: process.env.CACHE_TYPE as RequestCache,
    }
  );
  if (res.ok) {
    const user: UserType = await res.json();
    return user;
  }
  return null;
};
