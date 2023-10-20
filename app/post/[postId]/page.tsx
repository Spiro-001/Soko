import { getPostByIdServer } from "@/utils/getPostByIdServer";
import { dateFormat, timeFormat } from "@/utils/timeFormat";
import Comments from "@/components/Comments";
import Link from "next/link";
import React from "react";
import {
  ModeCommentOutlined,
  ShareOutlined,
  TurnedInNotOutlined,
} from "@mui/icons-material";
import LikeButton from "@/components/LikeButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

const Post = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostByIdServer(params.postId);
  const session = await getServerSession(authOptions);

  return (
    <div className="row-start-1 row-end-7 flex flex-col pt-4 px-4 gap-4 col-start-1 col-end-4 lg:col-start-2 lg:col-end-3 w-full max-w-[960px] mx-auto rounded-md shadow-sm bg-white">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center">
          <Link
            href={`/user/${post.User.id}`}
            className="bg-blue-400 text-white px-2 font-semibold border-r-4 border-blue-300"
          >
            {post.User.username}
          </Link>
          <span className="bg-slate-200 px-2 text-gray-500 text-xs py-1 border-r-4 border-slate-100 whitespace-nowrap">
            {post.id}
          </span>
        </div>
        <div className="flex flex-col bg-neutral-50 px-4 py-2 min-h-[240px] justify-between rounded-sm">
          <span className="whitespace-pre-wrap">{post.content}</span>
        </div>
        <div className="flex gap-x-1">
          <LikeButton post={post} postLike={post.PostLike} />
          <Link
            href={`/post/${post.id}`}
            className="underline-offset-2 flex gap-x-1 items-center"
          >
            <ModeCommentOutlined
              sx={{ color: "rgb(180 180 180)", height: 22 }}
            />
            <span className="text-xs text-neutral-400 font-semibold">
              {post._count.Comments}
            </span>
          </Link>
          <button className="underline-offset-2 flex gap-x-1 items-center">
            <ShareOutlined sx={{ color: "rgb(180 180 180)", height: 22 }} />
            <span className="text-xs text-neutral-400 font-semibold">
              Share
            </span>
          </button>
          <button className="underline-offset-2 flex gap-x-1 items-center">
            <TurnedInNotOutlined
              sx={{ color: "rgb(180 180 180)", height: 22 }}
            />
            <span className="text-xs text-neutral-400 font-semibold">Save</span>
          </button>
          <div className="ml-auto flex gap-x-1 flex-wrap justify-end gap-y-1 text-xs items-center">
            <span className="bg-zinc-900 text-stone-200 px-2 py-0.5 rounded-sm h-fit">
              {dateFormat(post.createdAt)}
            </span>
            <span className="bg-zinc-900 text-stone-200 px-2 py-0.5 rounded-sm h-fit">
              {timeFormat(post.createdAt)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 py-4 rounded-sm">
        <Comments post={post} session={session} />
      </div>
    </div>
  );
};

export default Post;
