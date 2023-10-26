export const isUpdated = (createdAt: string, updatedAt: string) => {
  return createdAt !== updatedAt;
};
