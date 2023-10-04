import { prisma } from ".";

export const getCommunityById = async (id: string) => {
  try {
    const community = await prisma.community.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        Owner: {
          select: {
            id: true,
            username: true,
          },
        },
        tags: true,
        _count: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return community;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
