import { prisma } from ".";

export const createComment = async (comment: {
  content: string;
  userId: string;
  postId: string;
  communityId: string;
}) => {
  try {
    const { content, userId, postId, communityId } = comment;
    const newComment = await prisma.comment.create({
      data: {
        content,
        userId,
        postId,
        communityId,
      },
      select: {
        id: true,
        content: true,
        userId: true,
        postId: true,
        _count: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        Replies: true,
        CommentLike: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return newComment;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
