import { prisma } from ".";

export const deletePostLike = async (id: string) => {
  try {
    const deletedPostLike = await prisma.postLike.delete({
      where: {
        id,
      },
      select: {
        id: true,
        userId: true,
        postId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return deletedPostLike;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
