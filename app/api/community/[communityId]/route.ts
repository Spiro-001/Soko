import { getCommunityById } from "@/prisma/getCommunityById";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { communityId: string } }
) => {
  try {
    const communities = await getCommunityById(params.communityId);
    return new Response(JSON.stringify(communities), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
