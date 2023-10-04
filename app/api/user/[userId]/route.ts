import { getUserById } from "@/prisma/getUserById";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const user = await getUserById(params.userId);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
