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
