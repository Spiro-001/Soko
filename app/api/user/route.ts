import { getUsersByCommunityId } from "@/prisma/getUsersByCommunityId";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const communityId = await req.json();
    console.log(communityId);
    const users = await getUsersByCommunityId({ id: communityId });
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
