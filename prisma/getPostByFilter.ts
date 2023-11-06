import { prisma } from ".";

export const getPostByFilter = async ({
  blocked,
  skip = 0,
  take = parseInt(process.env.NEXT_PUBLIC_TAKE_POST ?? "10"),
  by,
  id,
}: {
  blocked: string[];
  skip: number;
  take: number;
  by: "new" | "hot" | "top" | any;
  id: string;
}) => {
  let byQuery = {};
  let hotQuery = {};
  let byUserId = {};
  if (id) {
    byUserId = {
      AND: {
        userId: id,
      },
    };
  }
  switch (by) {
    case "new":
      byQuery = {
        createdAt: "desc",
      };
      break;
    case "hot":
      const now = new Date();

      const oneHourAgo = new Date(now);
      oneHourAgo.setHours(now.getHours() - 1);

      byQuery = {
        Comments: {
          _count: "desc",
        },
      };

      hotQuery = {
        Comments: {
          some: {
            createdAt: {
              gte: oneHourAgo,
              lte: now,
            },
          },
        },
      };
      break;
    case "top":
      byQuery = {
        PostLike: {
          _count: "desc",
        },
      };
      break;
  }
  try {
    const posts = await prisma.post.findMany({
      orderBy: [byQuery],
      skip,
      take,
      where: {
        ...hotQuery,
        NOT: {
          id: {
            in: blocked,
          },
        },
        ...byUserId,
      },
      select: {
        id: true,
        tags: true,
        content: true,
        headline: true,
        User: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        Comments: {
          select: {
            id: true,
          },
        },
        communityId: true,
        hasImage: true,
        PostLike: true,
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
