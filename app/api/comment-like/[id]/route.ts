import { deleteCommentLike } from "@/prisma/deleteCommentLike";
import { NextApiRequest, NextApiResponse } from "next";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const deletedCommentLike = await deleteCommentLike(params.id);
    return new Response(JSON.stringify(deletedCommentLike), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
