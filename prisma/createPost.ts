import { prisma } from ".";

export const createPost = async (post: {
  headline: string;
  tags: string[];
  content: string;
  userId: string;
  communityId: string;
}) => {
  try {
    const { tags, content, userId, communityId, headline } = post;
    const newPost = await prisma.post.create({
      data: {
        headline,
        tags,
        content,
        userId,
        communityId,
      },
    });
    prisma.$disconnect;
    return newPost;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
