import CommentBlock from "@/components/CommentBlock";
import { getPostByIdServer } from "@/utils/getPostByIdServer";
import { dateFormat, timeFormat } from "@/utils/timeFormat";
import React from "react";

const Post = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostByIdServer(params.postId);

  return (
    <div className="border border-black row-start-1 row-end-7 flex flex-col pt-8 pb-16 px-4 gap-4 lg:col-start-2 lg:col-end-4 col-start-1 col-end-5">
      <div className="flex flex-col">
        <span>{post.User.username}</span>
        <span>{post.content}</span>
        <span>{post.tags}</span>
        <span>{dateFormat(post.createdAt)}</span>
        <span>{timeFormat(post.createdAt)}</span>
      </div>
      <div className="flex flex-col">
        {post.Comments.map((comment) => (
          <CommentBlock key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
