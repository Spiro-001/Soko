import { timeDifference } from "@/utils/timeFormat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommentBlock = ({ comment }: { comment: CommentType | ReplyType }) => {
  console.log(comment);
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-x-3 items-center text-sm pb-2">
        <Image
          src="/no-profile.png"
          width={45}
          height={45}
          alt="profile"
          className="border-2 border-black rounded-full"
        />
        <div className="flex gap-x-1 items-center text-sm">
          <Link
            href={`/user/${comment.User.id}`}
            className="font-semibold hover:underline underline-offset-2"
          >
            {comment.User.username}
          </Link>
          {"◦"}
          <span>{timeDifference(comment.createdAt)}</span>
        </div>
      </div>
      <div className="flex h-full" style={{ padding: "0px 19px 0px 19px" }}>
        <div className="flex w-1.5 h-full bg-green-400 rounded-full border border-green-100 shadow-md shadow-green-300" />
        <div className="px-6 ml-5 flex flex-col gap-y-5">
          <div className="flex flex-col">
            <span className="">{comment.content}</span>
            <span>Comment Options</span>
          </div>
          {comment.Replies.length > 0 && (
            <div className="flex flex-col gap-y-3">
              {comment.Replies.map((reply) => {
                if ("_count" in reply) {
                  return (
                    <span
                      key={comment.id + "reply"}
                      className="text-sm text-neutral-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)]"
                    >
                      Load more replies
                    </span>
                  );
                }
                return <CommentBlock key={reply.id} comment={reply} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentBlock;
