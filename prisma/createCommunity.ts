import { prisma } from ".";

export const createCommunity = async (community: {
  title: string;
  ownerId: string;
  description: string;
  tags: Array<string>;
}) => {
  try {
    const { title, ownerId, description, tags } = community;
    const newCommunity = await prisma.community.create({
      data: {
        title,
        ownerId,
        description,
        tags,
      },
    });
    prisma.$disconnect;
    return newCommunity;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
