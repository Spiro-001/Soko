import { prisma } from ".";

export const createPostLike = async (postLike: {
  userId: string;
  postId: string;
}) => {
  try {
    const { userId, postId } = postLike;
    const newPostLike = await prisma.postLike.create({
      data: {
        userId,
        postId,
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
    return newPostLike;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
