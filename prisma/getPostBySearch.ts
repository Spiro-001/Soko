import { prisma } from ".";

export const getPostBySearch = async ({
  query,
  id,
  blocked,
  skip = 0,
  take = parseInt(process.env.NEXT_PUBLIC_TAKE_POST_BY_SEARCH ?? "10"),
}: {
  query: string;
  id: string;
  blocked: string[];
  skip: number;
  take: number;
}) => {
  try {
    const date = new Date(query);
    let dateQuery = {};
    if (date.valueOf()) {
      dateQuery = {
        createdAt: {
          gte: new Date(query),
          lte: new Date(new Date(query).setHours(23, 59, 59, 999)),
        },
      };
    }

    const posts = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      skip,
      take,
      where: {
        User: {
          id,
        },
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
              content: {
                contains: query,
              },
            },
            {
              headline: {
                contains: query,
              },
            },
            {
              Community: {
                OR: [
                  {
                    id: {
                      equals: query,
                    },
                    title: {
                      contains: query,
                    },
                  },
                ],
              },
            },
            dateQuery,
          ],
        },
      },
      select: {
        id: true,
        tags: true,
        headline: true,
        userId: true,
        content: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        PostLike: true,
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
