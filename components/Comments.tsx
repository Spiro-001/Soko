"use client";

import React, { useState } from "react";
import CommentBlock from "./CommentBlock";
import MakeComment from "./MakeComment";
import { ExpandMore } from "@mui/icons-material";

const Comments = ({
  post,
  session,
}: {
  post: PostByIdType;
  session: Session | null;
}) => {
  const [comments, setComments] = useState<CommentType[]>(post.Comments);

  return (
    <>
      <MakeComment
        postId={post.id}
        communityId={post.communityId}
        setComments={setComments}
        session={session}
      />
      <div className="flex flex-col">
        <div className="p-4 flex gap-x-4 items-center">
          <button className="text-sm flex items-center rounded-md bg-white shadow-sm py-1 px-3 font-semibold border border-neutral-200">
            <div className="flex gap-x-1">
              <span>Sort By:</span>
              <span className="text-red-300">Best</span>
            </div>
            <ExpandMore className="ml-8" />
          </button>
          <input
            placeholder="🔍 Search comments"
            className="px-3 text-sm rounded-md py-1.5 border border-neutral-200 focus:border-blue-600 outline-none"
          />
        </div>
        <div className="flex flex-col px-4 py-8 gap-y-4 h-full">
          {comments.map((comment) => (
            <CommentBlock
              key={comment.id}
              comment={comment}
              session={session}
            />
          ))}
          {comments.length > 10 && <button className="w-fit">Load More</button>}
        </div>
      </div>
    </>
  );
};

export default Comments;
