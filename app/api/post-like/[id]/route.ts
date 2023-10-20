import { deletePostLike } from "@/prisma/deletePostLike";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const deletedPostLike = await deletePostLike(params.id);
    return new Response(JSON.stringify(deletedPostLike), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
