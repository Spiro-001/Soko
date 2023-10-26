import { prisma } from ".";

export const patchPost = async (
  id: string,
  post: {
    headline: string;
    content: string;
  }
) => {
  try {
    const { headline, content } = post;
    const editComment = await prisma.post.update({
      where: {
        id,
      },
      data: {
        headline,
        content,
      },
    });
    prisma.$disconnect;
    return editComment;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
