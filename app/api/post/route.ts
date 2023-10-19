import { createPost } from "@/prisma/createPost";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const postContent = await req.json();
    const post = await createPost(postContent);
    console.log(post);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
