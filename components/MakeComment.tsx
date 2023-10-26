"use client";

import { createCommentClient } from "@/utils/createCommentClient";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";

const MakeComment = ({
  postId,
  communityId,
  setComments,
  session,
}: {
  postId: string;
  communityId: string;
  setComments: Dispatch<SetStateAction<CommentType[]>>;
  session: Session | null;
}) => {
  const [commentContent, setCommentContent] = useState<string>("");
  const [submittingComment, setSubmittingComment] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(event.target.value);
  };

  const onSubmitComment = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (
      commentContent.length != 0 &&
      session &&
      session.user &&
      session.user.id
    ) {
      setSubmittingComment(true);
      const comment = await createCommentClient({
        content: commentContent,
        userId: session.user.id,
        postId,
        communityId,
      });
      setSubmittingComment(false);
      setComments((prev: CommentType[]) => [comment, ...prev]);
      setCommentContent("");
    }
  };

  return (
    <form
      className="flex flex-col border-b border-neutral-200 pb-4"
      onSubmit={onSubmitComment}
    >
      <span className="text-sm py-1">Comment as {session?.user?.username}</span>
      <div className="shadow-sm rounded-md border border-neutral-100">
        <TextareaAutosize
          className="outline-none w-full py-2 px-3 text-black rounded-t-md max-h-[240px] min-h-[96px]"
          placeholder="Make a comment..."
          onChange={handleInput}
          value={commentContent}
          minRows={4}
          maxRows={8}
        />
        <div className="bg-neutral-200 flex py-2 px-3 justify-end rounded-b-md">
          <button
            className="bg-green-300 text-white font-semibold px-2 py-1 flex items-center justify-center max-w-[85px] w-full text-sm rounded-md disabled:text-neutral-400 disabled:bg-neutral-300"
            type="submit"
            disabled={commentContent.length === 0}
          >
            {submittingComment ? (
              <CircularProgress color="inherit" size="22px" />
            ) : (
              "Comment"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MakeComment;
