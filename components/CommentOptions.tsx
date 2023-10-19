"use client";

import { createCommentLikeClient } from "@/utils/createCommentLikeClient";
import { createReplyClient } from "@/utils/createReplyClient";
import { deleteCommentLikeClient } from "@/utils/deleteCommentLikeClient";
import { CircularProgress } from "@mui/material";
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";

const CommentOptions = ({
  comment,
  setReplies,
}: {
  comment: CommentType | ReplyType;
  setReplies: Dispatch<SetStateAction<ReplyType[]>>;
}) => {
  const handleUnlike = async (e: MouseEvent, id: string) => {
    const commentLike = await deleteCommentLikeClient(id);
    setLikeButton(
      <button className="w-fit" onClick={handleLike}>
        {"Like"}
      </button>
    );
  };

  const handleLike = async (e: MouseEvent) => {
    const commentLike = await createCommentLikeClient(
      "94b54024-efdf-4379-b36c-f2331e8ff079",
      comment.id
    );
    setLikeButton(
      <button onClick={(e) => handleUnlike(e, commentLike.id)}>
        {"Unlike"}
      </button>
    );
  };

  const handleReply = async (e: MouseEvent) => {
    const handleSendReply = async (e: SyntheticEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const replyContent = formData.get("reply-area") ?? "";
      if (replyContent.length != 0) {
        setReplyButton(
          <form
            onSubmit={handleSendReply}
            className="w-full flex flex-col items-end bg-slate-300"
          >
            <textarea
              name="reply-area"
              className="w-full outline-none px-3 py-2 min-h-[64px]"
            />
            <div className="bg-neutral-100 flex items-center justify-center w-16 px-2 py-1">
              <CircularProgress color="inherit" size="24px" />
            </div>
          </form>
        );
        const newReply = await createReplyClient({
          content: replyContent as string,
          userId: "94b54024-efdf-4379-b36c-f2331e8ff079",
          postId: comment.postId,
          replyToId: comment.id,
          communityId: comment.communityId,
        });
        setReplies((prev: ReplyType[]) => [newReply, ...prev]);
        setReplyButton(<button onClick={handleReply}>Reply</button>);
      }
    };
    setReplyButton(
      <form
        onSubmit={handleSendReply}
        className="w-full flex flex-col items-end bg-slate-300"
      >
        <textarea
          name="reply-area"
          className="w-full outline-none px-3 py-2 min-h-[64px]"
        />
        <div className="bg-neutral-100 w-16 flex justify-center items-center">
          <button type="submit" className="px-2 py-1">
            Send
          </button>
        </div>
      </form>
    );
  };

  const likedComment = () => {
    for (let x = 0; x < comment.CommentLike.length; x++) {
      if (
        comment.CommentLike[x].userId === "94b54024-efdf-4379-b36c-f2331e8ff079"
      ) {
        return (
          <button onClick={(e) => handleUnlike(e, comment.CommentLike[x].id)}>
            {"Unlike"}
          </button>
        );
      }
    }
    return <button onClick={handleLike}>{"Like"}</button>;
  };

  const [likeButton, setLikeButton] = useState(likedComment());
  const [replyButton, setReplyButton] = useState(
    <button onClick={handleReply}>Reply</button>
  );

  return (
    <div className="flex flex-wrap items-start">
      {likeButton}
      {replyButton}
    </div>
  );
};

export default CommentOptions;
