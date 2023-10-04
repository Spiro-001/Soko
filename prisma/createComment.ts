import { prisma } from ".";

export const createComment = async (comment: {
  content: string;
  userId: string;
  postId: string;
}) => {
  try {
    const { content, userId, postId } = comment;
    const newComment = await prisma.comments.create({
      data: {
        content,
        userId,
        postId,
      },
    });
    prisma.$disconnect;
    return newComment;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
