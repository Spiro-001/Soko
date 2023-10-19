import { prisma } from ".";

export const deletePost = async (id: string) => {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    });
    prisma.$disconnect;
    return deletedPost;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
