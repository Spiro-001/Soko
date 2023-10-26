import { deleteComment } from "@/prisma/deleteComment";
import { patchComment } from "@/prisma/patchComment";
// import { getCommentById } from "@/prisma/getPostById";

export const GET = async (
  req: Request,
  { params }: { params: { commentId: string } }
) => {
  // try {
  //   const comment = await getCommentById(params.commentId);
  //   return new Response(JSON.stringify(comment), { status: 200 });
  // } catch (error) {
  //   console.log(error);
  //   return new Response(JSON.stringify(error), { status: 500 });
  // }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { commentId: string } }
) => {
  try {
    const deletedComment = await deleteComment(params.commentId);
    return new Response(JSON.stringify(deletedComment), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { commentId: string } }
) => {
  try {
    const comment = await req.json();
    const editComment = await patchComment(params.commentId, comment);
    return new Response(JSON.stringify(editComment), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
