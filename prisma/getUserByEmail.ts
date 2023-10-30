import { prisma } from ".";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        username: true,
        email: true,
        password_digest: true,
        Profile: true,
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
