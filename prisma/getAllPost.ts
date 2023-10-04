import { prisma } from ".";

export const getAllPost = async ({
  blocked,
  skip = 0,
  take = 10,
}: {
  blocked: string[];
  skip: number;
  take: number;
}) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      skip,
      take,
      where: {
        NOT: {
          id: {
            in: blocked,
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
        Comments: true,
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
