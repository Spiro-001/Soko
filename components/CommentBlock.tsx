import { dateFormat, timeFormat } from "@/utils/timeFormat";
import React from "react";

const CommentBlock = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex flex-col">
      <span>{comment.User.username}</span>
      <span>{comment.content}</span>
      <span>{dateFormat(comment.createdAt)}</span>
      <span>{timeFormat(comment.createdAt)}</span>
    </div>
  );
};

export default CommentBlock;
