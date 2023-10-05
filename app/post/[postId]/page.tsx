import CommentBlock from "@/components/CommentBlock";
import Comments from "@/components/Comments";
import { getPostByIdServer } from "@/utils/getPostByIdServer";
import { dateFormat, timeFormat } from "@/utils/timeFormat";
import Link from "next/link";
import React from "react";

const Post = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostByIdServer(params.postId);

  return (
    <div className="border border-black row-start-1 row-end-7 flex flex-col pt-8 pb-16 px-4 gap-4 col-start-2 col-end-3">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
          <Link
            href={`/user/${post.User.id}`}
            className="bg-slate-200 px-2 font-bold rounded-sm hover:underline"
          >
            {post.User.username}
          </Link>
          {"</>"}
          <span className="bg-slate-200 px-2 text-gray-500 rounded-sm text-xs hover:underline">
            {post.id}
          </span>
          <div className="ml-auto flex gap-x-2 flex-wrap justify-end gap-y-1">
            <span className="bg-zinc-900 text-stone-200 px-2 rounded-sm  h-fit">
              {dateFormat(post.createdAt)}
            </span>
            <span className="bg-zinc-900 text-stone-200 px-2 rounded-sm h-fit">
              {timeFormat(post.createdAt)}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-slate-200 px-4 py-2 min-h-[240px] justify-between rounded-sm">
          <span>{post.content}</span>
          <div className="ml-auto flex gap-x-2">
            {post.tags.map((tag) => (
              <span key={post.id + tag} className="bg-slate-300 px-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 bg-slate-200 p-4">
        <form className="flex flex-col gap-y-1">
          <span className="text-sm">Comment as __username__</span>
          <textarea
            className="outline-none border border-black w-full py-2 px-2 text-black h-24 max-h-[240px] min-h-[96px]"
            placeholder="Make a comment..."
          />
        </form>
        <Comments comments={post.Comments} />
      </div>
    </div>
  );
};

export default Post;
