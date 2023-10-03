import { prisma } from ".";

export const getAllPost = async ({
  blocked,
  allowed,
  skip = 0,
  take = 10,
}: {
  blocked: string[];
  allowed: string[];
  skip: number;
  take: number;
}) => {
  try {
    const posts = await prisma.post.findMany({
      skip,
      take,
      where: {
        NOT: {
          id: {
            in: blocked,
          },
        },
        AND: {
          id: {
            in: allowed,
          },
        },
      },
      select: {
        id: true,
        tags: true,
        content: true,
        User: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    prisma.$disconnect;
    return posts;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
