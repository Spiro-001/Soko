import { prisma } from ".";

export const createCommentLike = async (commentLike: {
  userId: string;
  commentId: string;
}) => {
  try {
    const { userId, commentId } = commentLike;
    const newCommentLike = await prisma.commentLike.create({
      data: {
        userId,
        commentId,
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
