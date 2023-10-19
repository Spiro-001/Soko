import { prisma } from ".";

export const deleteCommentLike = async (id: string) => {
  try {
    const deletedCommentLike = await prisma.commentLike.delete({
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
    return deletedCommentLike;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
