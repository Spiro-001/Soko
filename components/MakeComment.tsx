"use client";

import { createCommentClient } from "@/utils/createCommentClient";
import { CircularProgress } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";

const MakeComment = ({
  postId,
  userId,
  setInitComment,
}: {
  postId: string;
  userId: string;
  setInitComment: Dispatch<SetStateAction<CommentType[]>>;
}) => {
  const [commentContent, setCommentContent] = useState<string>("");
  const [submittingComment, setSubmittingComment] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(event.target.value);
  };

  const onSubmitComment = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (commentContent.length != 0) {
      setSubmittingComment(true);
      const comment = await createCommentClient({
        content: commentContent,
        userId,
        postId,
      });
      setSubmittingComment(false);
      setInitComment((prev: CommentType[]) => [comment, ...prev]);
      setCommentContent("");
    }
  };

  return (
    <form
      className="flex flex-col border-b border-black pb-4"
      onSubmit={onSubmitComment}
    >
      <span className="text-sm py-1">Comment as __username__</span>
      <textarea
        className="outline-none border-x border-t border-black w-full py-2 px-2 text-black h-24 max-h-[240px] min-h-[96px]"
        placeholder="Make a comment..."
        onChange={handleInput}
        value={commentContent}
      />
      <div className="bg-neutral-100 flex border-x border-b border-black py-2 px-3 justify-end">
        <button
          className="bg-neutral-300 px-4 py-2 flex items-center justify-center max-w-[105px] w-full"
          type="submit"
        >
          {submittingComment ? (
            <CircularProgress color="inherit" size="24px" />
          ) : (
            "Comment"
          )}
        </button>
      </div>
    </form>
  );
};

export default MakeComment;
