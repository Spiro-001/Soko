import { prisma } from ".";

export const deleteComment = async (id: string) => {
  try {
    const deletedComment = await prisma.comment.delete({
      where: {
        id,
      },
    });
    prisma.$disconnect;
    return deletedComment;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
