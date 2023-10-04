import { prisma } from ".";

export const getPostById = async (id: string) => {
  try {
    const posts = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        tags: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        content: true,
        Comments: {
          skip: 0,
          take: 10,
          select: {
            id: true,
            content: true,
            User: {
              select: {
                id: true,
                username: true,
              },
            },
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return posts;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
