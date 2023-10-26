import { prisma } from ".";

export const patchComment = async (
  id: string,
  comment: {
    content: string;
  }
) => {
  try {
    const { content } = comment;
    const editComment = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        content,
      },
      select: {
        id: true,
        content: true,
        userId: true,
        postId: true,
        communityId: true,
        _count: true,
        User: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
        Replies: true,
        CommentLike: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return editComment;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
