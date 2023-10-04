import CommentBlock from "@/components/CommentBlock";
import { getPostByIdServer } from "@/utils/getPostByIdServer";
import { dateFormat, timeFormat } from "@/utils/timeFormat";
import React from "react";

const Post = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostByIdServer(params.postId);

  return (
    <div className="flex flex-col">
      <span>{post.id}</span>
      <span>{post.User.username}</span>
      <span>{post.content}</span>
      <span>{post.tags}</span>
      <span>{dateFormat(post.createdAt)}</span>
      <span>{timeFormat(post.createdAt)}</span>
      <div>
        {post.Comments.map((comment) => (
          <CommentBlock key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
