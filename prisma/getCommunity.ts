import { prisma } from ".";

export const getCommunity = async ({
  interest,
  blocked,
  skip = 0,
  take = parseInt(process.env.NEXT_PUBLIC_TAKE_COMMUNITY ?? "5"),
  userId = "",
}: {
  interest: string[];
  blocked: string[];
  skip: number;
  take: number;
  userId: string;
}) => {
  try {
    const prismaQuery = {
      skip,
      take,
      where: {
        NOT: {
          id: {
            in: blocked,
          },
        },
      },
      include: {
        _count: true,
      },
    };
    if (interest.length > 0) {
      prismaQuery.where = {
        ...prismaQuery.where,
        ...{
          AND: {
            tags: {
              hasSome: interest,
            },
          },
        },
      };
    }
    if (userId) {
      prismaQuery.where = {
        ...prismaQuery.where,
        ...{
          Members: {
            some: {
              userId: userId,
            },
          },
        },
      };
    }
    const communities = await prisma.community.findMany(prismaQuery);
    prisma.$disconnect;
    return communities;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
