import { createComment } from "@/prisma/createComment";
import { NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const commentContent = await req.json();
    const comment = await createComment(commentContent);
    return new Response(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
