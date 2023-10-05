import React from "react";
import CommentBlock from "./CommentBlock";

const Comments = ({ comments }: { comments: CommentType[] }) => {
  console.log(comments);
  return (
    <div className="flex flex-col">
      <div className="bg-slate-50 p-4">Comment fiter and search</div>
      <div className="flex flex-col bg-slate-100 px-4 py-2 gap-y-4 h-full">
        {comments.map((comment) => (
          <CommentBlock key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
