import { prisma } from ".";

export const deleteCommentLike = async (id: string) => {
  try {
    const newCommentLike = await prisma.commentLike.delete({
      where: {
        id,
      },
      select: {
        id: true,
        userId: true,
        commentId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return newCommentLike;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
