import { getCommunity } from "@/prisma/getCommunity";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.url) {
      const { searchParams } = new URL(req.url);

      console.log(searchParams.get("userId"));

      const query = {
        interest: JSON.parse(searchParams.get("interest") ?? "[]"),
        blocked: JSON.parse(searchParams.get("blocked") ?? "[]"),
        skip: JSON.parse(searchParams.get("skip") ?? "0"),
        take: JSON.parse(searchParams.get("take") ?? "10"),
        userId: searchParams.get("userId") ?? "",
      };

      const communities = await getCommunity(query);
      return new Response(JSON.stringify(communities), { status: 200 });
    }
    return new Response(JSON.stringify("URL Invalid"), { status: 404 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
