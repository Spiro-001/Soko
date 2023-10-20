import { getPostBySearch } from "@/prisma/getPostBySearch";
import { NextApiResponse } from "next";

export const GET = async (req: Request, res: NextApiResponse) => {
  try {
    if (req.url) {
      const url = new URL(req.url);
      const searchParams = new URLSearchParams(url.search);

      const query = {
        query: searchParams.get("query") ?? "",
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
        skip: JSON.parse(searchParams.get("skip") ?? "0"),
        take: JSON.parse(searchParams.get("take") ?? "10"),
      };
      const posts = await getPostBySearch(query);
      return new Response(JSON.stringify(posts), { status: 200 });
    }
    return new Response(JSON.stringify("URL Invalid"), { status: 404 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
