import { prisma } from ".";

export const getPost = async ({
  blocked,
  skip = 0,
  take = parseInt(process.env.NEXT_PUBLIC_TAKE_POST ?? "10"),
}: {
  blocked: string[];
  skip: number;
  take: number;
}) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      skip,
      take,
      where: {
        NOT: {
          id: {
            in: blocked,
          },
        },
      },
      select: {
        id: true,
        tags: true,
        content: true,
        headline: true,
        User: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        Comments: {
          select: {
            id: true,
          },
        },
        communityId: true,
        hasImage: true,
        PostLike: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    prisma.$disconnect;
    return posts;
  } catch (error) {
    prisma.$disconnect;
    console.log(error);
  }
};
