"use client";

import { timeDifference } from "@/utils/timeFormat";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommentOptions from "./CommentOptions";
import MoreMenuComment from "./MoreMenuComment";
import { isUpdated } from "@/utils/isUpdated";
import { getSPhotoFromS3 } from "@/aws/s3_aws";

const CommentBlock = ({
  comment,
  session,
  setComments,
}: {
  comment: CommentType | ReplyType;
  session: Session | null;
  setComments: Dispatch<SetStateAction<CommentType[]>>;
}) => {
  const [replies, setReplies] = useState<ReplyType[]>(comment.Replies);
  const [user, setUser] = useState("/no-profile.png");

  useEffect(() => {
    const getUserProfilePicture = async () => {
      const picture = await getSPhotoFromS3(`${comment.User.id}-profile`);
      setUser(picture);
    };
    getUserProfilePicture();
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex gap-x-3 items-center text-sm pb-2 flex-1">
        <Image
          src={user}
          width={34}
          height={34}
          alt="profile"
          className="border border-black rounded-full max-h-[34px] max-w-[34px] object-cover"
        />
        <div className="flex gap-x-1 items-center text-sm flex-1">
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
          {isUpdated(comment.createdAt, comment.updatedAt) && (
            <span className="text-xs px-2 text-neutral-400">(edited)</span>
          )}
          <div className="ml-auto">
            <MoreMenuComment setCommentsState={setComments} comment={comment} />
          </div>
        </div>
      </div>
      <div
        className="flex h-full w-full"
        style={{ padding: "0px 0px 0px 15px" }}
      >
        <div className="flex min-w-[3px] h-full bg-neutral-200 rounded-full mr-2" />
        <div
          className="px-1 flex flex-col gap-y-3 w-full"
          id={`${comment.id}-container`}
        >
          <div className="flex flex-col gap-y-1 pl-4">
            <span
              className="whitespace-pre-wrap text-sm break-words outline-blue-600"
              id={`${comment.id}-content`}
            >
              {comment.content}
            </span>
            <CommentOptions
              comment={comment}
              setReplies={setReplies}
              session={session}
            />
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
                      setComments={
                        setReplies as Dispatch<SetStateAction<CommentType[]>>
                      }
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
