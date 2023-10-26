import { prisma } from ".";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        OwnedCommunities: true,
        JoinedCommunities: {
          include: {
            Community: true,
          },
        },
        Posts: {
          skip: 0,
          take: 10,
          include: {
            User: {
              select: {
                id: true,
                username: true,
              },
            },
            PostLike: true,
            Comments: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return user;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
