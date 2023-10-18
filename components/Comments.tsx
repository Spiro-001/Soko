"use client";

import React, { useState } from "react";
import CommentBlock from "./CommentBlock";
import MakeComment from "./MakeComment";

const Comments = ({
  comments,
  post,
}: {
  comments: CommentType[];
  post: PostByIdType;
}) => {
  const [initComments, setInitComment] = useState<CommentType[]>(comments);

  return (
    <>
      <MakeComment postId={post.id} setInitComment={setInitComment} />
      <div className="flex flex-col">
        <div className="bg-slate-50 p-4">Comment fiter and search</div>
        <div className="flex flex-col bg-slate-100 px-4 py-8 gap-y-4 h-full">
          {initComments.map((comment) => (
            <CommentBlock key={comment.id} comment={comment} />
          ))}
          {post._count.Comments > 10 && (
            <button className="w-fit">Load More</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
