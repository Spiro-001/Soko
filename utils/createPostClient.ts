type ReturnNewPostType = {
  id: string;
  headline: string;
  communityId: string;
  content: string;
  userId: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export const createPostClient = async (postContent: NewPostType) => {
  const res = await fetch("/api/post", {
    cache: process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache,
    method: "POST",
    body: JSON.stringify(postContent),
  });
  const reply: ReturnNewPostType = await res.json();
  return reply;
};
