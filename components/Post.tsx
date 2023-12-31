import { dateFormat, timeFormat } from "@/utils/timeFormat";
import {
  ModeCommentOutlined,
  ShareOutlined,
  TurnedInNotOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import LikeButton from "./LikeButton";
import MoreMenuPost from "./MoreMenuPost";
import { isUpdated } from "@/utils/isUpdated";
import Image from "next/image";

const Post = async ({
  post,
  image,
  setPostsState,
  session,
}: {
  post: PostType;
  image: string;
  setPostsState: Dispatch<SetStateAction<PostType[]>>;
  session: Session | null;
}) => {
  return (
    <section
      className="flex flex-col px-4 py-4 w-full gap-y-6 rounded-md bg-white shadow-sm border border-neutral-200"
      id={`${post.id}-container`}
    >
      <div className="flex flex-wrap gap-y-2 gap-x-1 ">
        <div className="flex gap-y-2 items-center">
          <Link
            href={`/user/${post.User.id}`}
            className="bg-blue-400 px-2 py-1 font-semibold text-white text-xs border-r-4 border-blue-300"
          >
            {post.User.username}
          </Link>
          <Link
            href={`/post/${post.id}`}
            className="bg-slate-200 px-2 flex items-center py-1 text-gray-500 text-xs whitespace-nowrap border-r-4 border-slate-100"
          >
            {post.id}
          </Link>
          {isUpdated(post.createdAt, post.updatedAt) && (
            <span className="text-xs px-2 text-neutral-400">(edited)</span>
          )}
        </div>
        <div className="ml-auto flex gap-x-2 flex-wrap justify-end gap-y-1 text-xs items-center">
          <MoreMenuPost
            setPostsState={setPostsState}
            post={post}
            session={session}
          />
        </div>
      </div>
      <div
        className="px-3 py-3 rounded-sm whitespace-pre-wrap font-bold border-b border-neutral-200 outline-blue-600"
        id={`${post.id}-headline`}
      >
        {post.headline}
      </div>
      {post.hasImage && (
        <Image
          src={image}
          width={1}
          height={1}
          alt="profile"
          className="rounded-md text-lg object-cover w-full h-full max-w-[400px] shadow-sm"
          id="profile-picture"
          unoptimized
        />
      )}
      <div
        className="bg-neutral-50 px-4 py-4 rounded-sm whitespace-pre-wrap outline-blue-600"
        id={`${post.id}-content`}
      >
        {post.content}
      </div>
      <div className="flex justify-between gap-x-1">
        <LikeButton postLike={post.PostLike} post={post} session={session} />
        <Link
          href={`/post/${post.id}`}
          className="underline-offset-2 flex gap-x-1 items-center"
        >
          <ModeCommentOutlined sx={{ color: "rgb(180 180 180)", height: 22 }} />
          <span className="text-xs text-neutral-400 font-semibold">
            {post.Comments.length}
          </span>
        </Link>
        <button className="underline-offset-2 flex gap-x-1 items-center">
          <ShareOutlined sx={{ color: "rgb(180 180 180)", height: 22 }} />
          <span className="text-xs text-neutral-400 font-semibold">Share</span>
        </button>
        <button className="underline-offset-2 flex gap-x-1 items-center">
          <TurnedInNotOutlined sx={{ color: "rgb(180 180 180)", height: 22 }} />
          <span className="text-xs text-neutral-400 font-semibold">Save</span>
        </button>
        <div className="ml-auto flex gap-x-2 flex-wrap justify-end gap-y-1 text-xs items-center">
          <span className="bg-zinc-900 text-stone-200 px-2 py-0.5 rounded-sm h-fit">
            {dateFormat(post.createdAt)}
          </span>
          <span className="bg-zinc-900 text-stone-200 px-2 py-0.5 rounded-sm h-fit">
            {timeFormat(post.createdAt)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Post;
