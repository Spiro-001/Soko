import { createCommentLike } from "@/prisma/createCommentLike";
import { NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const commentLikeContent = await req.json();
    const commentLike = await createCommentLike(commentLikeContent);
    return new Response(JSON.stringify(commentLike), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
