import { deletePost } from "@/prisma/deletePost";
import { getPostById } from "@/prisma/getPostById";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const post = await getPostById(params.postId);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const DELETE = async (
  req: NextApiRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const deletedPost = await deletePost(params.postId);
    return new Response(JSON.stringify(deletedPost), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
