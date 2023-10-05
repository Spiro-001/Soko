import { timeDifference } from "@/utils/timeFormat";
import React from "react";

const CommentBlock = ({ comment }: { comment: CommentType | ReplyType }) => {
  console.log(comment);
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1 items-center text-sm">
        <span className="font-semibold">{comment.User.username}</span>
        {"◦"}
        <span>{timeDifference(comment.createdAt)}</span>
      </div>
      <div className="border-l-4 border-gray-500 px-6 ml-1 flex flex-col gap-y-2">
        <div className="flex flex-col">
          <span className="">{comment.content}</span>
          <span>Comment Options</span>
        </div>
        {comment.Replies.map((reply) => {
          if ("_count" in reply) {
            return (
              <span key={comment.id + "reply"} className="text-sm">
                Load more replies
              </span>
            );
          }
          return <CommentBlock key={reply.id} comment={reply} />;
        })}
      </div>
    </div>
  );
};

export default CommentBlock;
