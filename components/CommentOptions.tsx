"use client";

import { createCommentLikeClient } from "@/utils/createCommentLikeClient";
import { createReplyClient } from "@/utils/createReplyClient";
import { deleteCommentLikeClient } from "@/utils/deleteCommentLikeClient";
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  ReplyRounded,
} from "@mui/icons-material";
import { CircularProgress, TextareaAutosize } from "@mui/material";
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
  session,
}: {
  comment: CommentType | ReplyType;
  setReplies: Dispatch<SetStateAction<ReplyType[]>>;
  session: Session | null;
}) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyAmount, setReplyAmount] = useState(0);

  const handleUnlike = async (e: MouseEvent, id: string) => {
    const commentLike = await deleteCommentLikeClient(id);
    setLikeButton(
      <button className="w-fit flex items-center gap-x-1" onClick={handleLike}>
        <FavoriteBorderRounded
          sx={{ height: 24, color: "rgba(180,180,180)" }}
        />{" "}
        {comment._count.CommentLike}
      </button>
    );
  };

  const handleLike = async (e: MouseEvent) => {
    if (session && session.user && session.user.id) {
      const commentLike = await createCommentLikeClient(
        session.user.id,
        comment.id
      );
      setLikeButton(
        <button
          className="flex items-center gap-x-1"
          onClick={(e) => handleUnlike(e, commentLike.id)}
        >
          <FavoriteRounded sx={{ height: 24, color: "rgba(239, 68, 68)" }} />{" "}
          {comment._count.CommentLike + 1}
        </button>
      );
    }
  };

  const handleReply = async (e: MouseEvent) => {
    const handleSendReply = async (e: SyntheticEvent) => {
      e.preventDefault();
      if (session && session.user && session.user.id) {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const replyContent = formData.get("reply-area") ?? "";
        if (replyContent.length != 0) {
          setReplyButton(
            <form
              onSubmit={handleSendReply}
              className="w-full flex flex-col items-end bg-neutral-200 rounded-md border border-neutral-200 "
            >
              <TextareaAutosize
                name="reply-area"
                className="w-full outline-none px-3 py-2 min-h-[64px] max-h-[240px] rounded-t-md"
                minRows={2}
                maxRows={8}
              />
              <div className="w-16 flex justify-center items-center py-1 px-1">
                <div className="px-3 py-0.5 text-sm h-fit bg-green-300 text-white rounded-md w-full flex items-center justify-center">
                  <CircularProgress color="inherit" size="20px" />
                </div>
              </div>
            </form>
          );
          const newReply = await createReplyClient({
            content: replyContent as string,
            userId: session.user.id,
            postId: comment.postId,
            replyToId: comment.id,
            communityId: comment.communityId,
          });
          setReplyAmount((prev) => prev + 1);
          setReplies((prev: ReplyType[]) => [newReply, ...prev]);
          setReplyButton(<div></div>);
        }
      }
    };
    if (replyOpen) {
      setReplyButton(<div></div>);
      setReplyOpen(false);
    } else {
      setReplyOpen(true);
      setReplyButton(
        <form
          onSubmit={handleSendReply}
          className="w-full flex flex-col items-end bg-neutral-200 rounded-md border border-neutral-200 "
        >
          <TextareaAutosize
            name="reply-area"
            className="w-full outline-none px-3 py-2 min-h-[64px] max-h-[240px] rounded-t-md"
            minRows={2}
            maxRows={8}
          />
          <div className="w-16 flex justify-center items-center py-1 px-1">
            <button
              type="submit"
              className="px-3 py-0.5 text-sm h-fit bg-green-300 text-white rounded-md w-full flex items-center justify-center"
            >
              Reply
            </button>
          </div>
        </form>
      );
    }
  };

  const likedComment = () => {
    for (let x = 0; x < comment.CommentLike.length; x++) {
      if (comment.CommentLike[x].userId === session?.user?.id ?? "") {
        return (
          <button
            onClick={(e) => handleUnlike(e, comment.CommentLike[x].id)}
            className="flex items-center gap-x-1"
          >
            <FavoriteRounded sx={{ height: 24, color: "rgba(239, 68, 68)" }} />{" "}
            {comment._count.CommentLike}
          </button>
        );
      }
    }
    return (
      <button onClick={handleLike} className="flex items-center gap-x-1">
        <FavoriteBorderRounded
          sx={{ height: 24, color: "rgba(180,180,180)" }}
        />{" "}
        {comment._count.CommentLike}
      </button>
    );
  };

  const [likeButton, setLikeButton] = useState(likedComment());
  const [replyButton, setReplyButton] = useState(<div></div>);

  return (
    <div className="flex flex-wrap items-center text-sm gap-x-2 gap-y-2">
      {likeButton}
      <button onClick={handleReply} className="flex items-center gap-x-1">
        <ReplyRounded sx={{ height: 24, color: "rgba(180,180,180)" }} />
        {comment._count.Replies + replyAmount}
      </button>
      {replyButton}
    </div>
  );
};

export default CommentOptions;
