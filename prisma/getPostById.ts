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
          where: {
            replyToId: null,
          },
          select: {
            id: true,
            content: true,
            User: {
              select: {
                id: true,
                username: true,
              },
            },
            Replies: {
              skip: 0,
              take: 5,
              select: {
                id: true,
                content: true,
                User: {
                  select: {
                    id: true,
                    username: true,
                  },
                },
                Replies: {
                  select: {
                    _count: true,
                  },
                },
                createdAt: true,
                updatedAt: true,
              },
            },
            _count: true,
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