import { prisma } from ".";

export const getPostById = async (id: string) => {
  try {
    const posts = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        headline: true,
        tags: true,
        User: {
          select: {
            id: true,
            username: true,
          },
        },
        content: true,
        PostLike: true,
        hasImage: true,
        Comments: {
          orderBy: {
            createdAt: "desc",
          },
          skip: 0,
          take: parseInt(process.env.NEXT_PUBLIC_TAKE_COMMENT ?? "10"),
          where: {
            replyToId: null,
          },
          select: {
            id: true,
            content: true,
            User: {
              select: {
                id: true,
                username: true,
                image: true,
              },
            },
            Replies: {
              orderBy: {
                createdAt: "desc",
              },
              skip: 0,
              take: parseInt(process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5"),
              select: {
                id: true,
                content: true,
                User: {
                  select: {
                    id: true,
                    username: true,
                    image: true,
                  },
                },
                Replies: {
                  orderBy: {
                    createdAt: "desc",
                  },
                  skip: 0,
                  take: parseInt(process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5"),
                  select: {
                    id: true,
                    content: true,
                    User: {
                      select: {
                        id: true,
                        username: true,
                        image: true,
                      },
                    },
                    Replies: {
                      orderBy: {
                        createdAt: "desc",
                      },
                      skip: 0,
                      take: parseInt(
                        process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5"
                      ),
                      select: {
                        id: true,
                        content: true,
                        User: {
                          select: {
                            id: true,
                            username: true,
                            image: true,
                          },
                        },
                        Replies: {
                          orderBy: {
                            createdAt: "desc",
                          },
                          skip: 0,
                          take: parseInt(
                            process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5"
                          ),
                          select: {
                            id: true,
                            content: true,
                            User: {
                              select: {
                                id: true,
                                username: true,
                                image: true,
                              },
                            },
                            Replies: {
                              orderBy: {
                                createdAt: "desc",
                              },
                              skip: 0,
                              take: parseInt(
                                process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5"
                              ),
                              select: {
                                id: true,
                                content: true,
                                User: {
                                  select: {
                                    id: true,
                                    username: true,
                                    image: true,
                                  },
                                },
                                Replies: {
                                  select: {
                                    _count: true,
                                  },
                                },
                                CommentLike: true,
                                postId: true,
                                communityId: true,
                                _count: true,
                                createdAt: true,
                                updatedAt: true,
                              },
                            },
                            CommentLike: true,
                            postId: true,
                            communityId: true,
                            _count: true,
                            createdAt: true,
                            updatedAt: true,
                          },
                        },
                        CommentLike: true,
                        postId: true,
                        communityId: true,
                        _count: true,
                        createdAt: true,
                        updatedAt: true,
                      },
                    },
                    CommentLike: true,
                    postId: true,
                    communityId: true,
                    _count: true,
                    createdAt: true,
                    updatedAt: true,
                  },
                },
                CommentLike: true,
                postId: true,
                communityId: true,
                _count: true,
                createdAt: true,
                updatedAt: true,
              },
            },
            CommentLike: true,
            postId: true,
            communityId: true,
            _count: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        communityId: true,
        _count: true,
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
