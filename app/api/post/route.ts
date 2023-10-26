import { createPost } from "@/prisma/createPost";
import { NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const postContent = await req.json();
    const post = await createPost(postContent);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const GET = async (req: Request, res: NextApiResponse) => {
  try {
    if (req.url) {
      const url = new URL(req.url);
      const searchParams = new URLSearchParams(url.search);

      const query = {
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
        skip: JSON.parse(searchParams.get("skip") ?? "0"),
        take: JSON.parse(searchParams.get("take") ?? "10"),
        searchBy: JSON.parse(searchParams.get("searchBy") ?? ""),
      };
    }
  } catch (error) {}
};
