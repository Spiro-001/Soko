"use client";

import { timeDifference } from "@/utils/timeFormat";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CommentOptions from "./CommentOptions";

const CommentBlock = ({
  comment,
  session,
}: {
  comment: CommentType | ReplyType;
  session: Session | null;
}) => {
  const [replies, setReplies] = useState<ReplyType[]>(comment.Replies);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex gap-x-3 items-center text-sm pb-2">
        <Image
          src={session?.user?.image ?? "/no-profile.png"}
          width={34}
          height={34}
          alt="profile"
          className="border border-black rounded-full"
        />

        <div className="flex gap-x-1 items-center text-sm">
          <Link
            href={`/user/${comment.User.id}`}
            className="hover:underline underline-offset-2"
          >
            {comment.User.username}
          </Link>
          {"◦"}
          <span className="text-xs text-neutral-400">
            {timeDifference(comment.createdAt)}
          </span>
        </div>
      </div>
      <div
        className="flex h-full w-full"
        style={{ padding: "0px 0px 0px 14px" }}
      >
        <div className="flex min-w-[4px] w-1 h-full bg-neutral-200 rounded-full mr-2" />
        <div className="px-1 flex flex-col gap-y-3 w-full">
          <div className="flex flex-col gap-y-1 pl-4">
            <span className="whitespace-pre-wrap text-sm break-words">
              {comment.content}
            </span>
            <CommentOptions comment={comment} setReplies={setReplies} />
          </div>
          {replies.length > 0 && (
            <div className="flex flex-col gap-y-3">
              {replies.map((reply) => {
                if ("id" in reply) {
                  return (
                    <CommentBlock
                      key={reply.id}
                      comment={reply}
                      session={session}
                    />
                  );
                }
                return (
                  <button
                    key={comment.id + "reply"}
                    className="text-sm text-neutral-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] pl-6 w-fit"
                  >
                    Load more replies
                  </button>
                );
              })}
              {replies.length >
                parseInt(process.env.NEXT_PUBLIC_TAKE_REPLIES ?? "5") - 1 && (
                <button
                  key={comment.id + "reply"}
                  className="text-sm text-neutral-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)] w-fit pl-6"
                >
                  Load more replies
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentBlock;
