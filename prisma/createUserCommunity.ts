import { prisma } from ".";

export const createUserCommunity = async (community: {
  userId: string;
  communityId: string;
}) => {
  try {
    const { userId, communityId } = community;
    const newUserCommunity = await prisma.userCommunity.create({
      data: {
        userId,
        communityId,
      },
    });
    prisma.$disconnect;
    return newUserCommunity;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
