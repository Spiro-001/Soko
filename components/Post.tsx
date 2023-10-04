import { dateFormat, timeFormat } from "@/utils/timeFormat";
import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: PostType }) => {
  return (
    <section className="flex flex-col border border-black px-8 py-4 w-full gap-y-6 rounded-sm text-xs xl:text-base">
      <div className="flex gap-2 items-center">
        <Link
          href={`/user/${post.User.id}`}
          className="bg-slate-200 px-2 font-bold rounded-sm hover:underline"
        >
          {post.User.username}
        </Link>
        {"</>"}
        <Link
          href={`/post/${post.id}`}
          className="bg-slate-200 px-2 text-gray-500 rounded-sm hover:underline"
        >
          {post.id}
        </Link>
        <div className="ml-auto flex gap-x-2 flex-wrap justify-end gap-y-1">
          <span className="bg-zinc-900 text-stone-200 px-2 rounded-sm  h-fit">
            {dateFormat(post.createdAt)}
          </span>
          <span className="bg-zinc-900 text-stone-200 px-2 rounded-sm h-fit">
            {timeFormat(post.createdAt)}
          </span>
        </div>
      </div>
      <div className="bg-gray-200 px-4 py-2 rounded-sm">{post.content}</div>
      <div className="flex justify-between">
        <div>{post.Comments.length} Comments</div>
        <div className="flex gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={post.id + tag + idx}
              className="px-3 bg-stone-200 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
