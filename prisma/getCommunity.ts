import { prisma } from ".";

export const getCommunity = async ({
  interest,
  blocked,
  skip = 0,
  take = 5,
}: {
  interest: string[];
  blocked: string[];
  skip: number;
  take: number;
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
    const communities = await prisma.community.findMany(prismaQuery);
    prisma.$disconnect;
    return communities;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
