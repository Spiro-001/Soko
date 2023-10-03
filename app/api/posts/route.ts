import { getAllPost } from "@/prisma/getAllPost";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);

      const query = {
        allowed: JSON.parse(searchParams.get("allowed") ?? "[]"),
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
      };

      const posts = await getAllPost(query);
      return new Response(JSON.stringify(posts), { status: 200 });
    }
    return new Response(JSON.stringify("URL Invalid"), { status: 404 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
