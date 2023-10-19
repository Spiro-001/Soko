"use client";

import React, { useState } from "react";
import CommentBlock from "./CommentBlock";
import MakeComment from "./MakeComment";

const Comments = ({ post }: { post: PostByIdType }) => {
  const [comments, setComments] = useState<CommentType[]>(post.Comments);

  return (
    <>
      <MakeComment
        postId={post.id}
        communityId={post.communityId}
        setComments={setComments}
      />
      <div className="flex flex-col">
        <div className="bg-slate-50 p-4">Comment fiter and search</div>
        <div className="flex flex-col bg-slate-100 px-4 py-8 gap-y-4 h-full">
          {comments.map((comment) => (
            <CommentBlock key={comment.id} comment={comment} />
          ))}
          {comments.length > 10 && <button className="w-fit">Load More</button>}
        </div>
      </div>
    </>
  );
};

export default Comments;
