import { deleteComment } from "@/prisma/deleteComment";
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
