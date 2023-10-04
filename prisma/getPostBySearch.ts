import { prisma } from ".";

export const getPostBySearch = async ({
  query,
  blocked,
  skip = 0,
  take = 10,
}: {
  query: string;
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
        AND: {
          OR: [
            {
              id: {
                equals: query,
              },
            },
            {
              tags: {
                hasSome: [query],
              },
            },
            {
              User: {
                OR: [
                  {
                    username: {
                      equals: query,
                    },
                    id: {
                      equals: query,
                    },
                  },
                ],
              },
            },
            {
              content: query,
            },
          ],
        },
      },
      select: {
        id: true,
        tags: true,
        content: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        Comments: {
          select: {
            id: true,
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
