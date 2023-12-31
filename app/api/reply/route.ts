import { createReply } from "@/prisma/createReply";
import { NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const replyContent = await req.json();
    const reply = await createReply(replyContent);
    return new Response(JSON.stringify(reply), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
