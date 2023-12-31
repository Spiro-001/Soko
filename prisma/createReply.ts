import { prisma } from ".";

export const createReply = async (comment: {
  content: string;
  userId: string;
  postId: string;
  replyToId: string;
  communityId: string;
}) => {
  try {
    const { content, userId, postId, replyToId, communityId } = comment;
    const newReply = await prisma.comment.create({
      data: {
        content,
        userId,
        postId,
        replyToId,
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
            image: true,
          },
        },
        communityId: true,
        Replies: true,
        CommentLike: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return newReply;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
