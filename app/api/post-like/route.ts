import { createPostLike } from "@/prisma/createPostLike";
import { NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const postLikeContent = await req.json();
    const postLike = await createPostLike(postLikeContent);
    return new Response(JSON.stringify(postLike), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
