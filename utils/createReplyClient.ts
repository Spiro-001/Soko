export const createReplyClient = async (replyContent: NewReplyType) => {
  const res = await fetch("/api/reply", {
    cache:
      (process.env.NEXT_PUBLIC_CACHE_TYPE as RequestCache) ?? "force-cache",
    method: "POST",
    body: JSON.stringify(replyContent),
  });
  const reply: ReplyType = await res.json();
  return reply;
};
