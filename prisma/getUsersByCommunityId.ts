import { prisma } from ".";

export const getUsersByCommunityId = async ({ id }: { id: string }) => {
  try {
    const users = await prisma.community.findUnique({
      where: {
        id,
      },
      select: {
        Members: {
          select: {
            User: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
    });
    prisma.$disconnect;
    return users?.Members;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
