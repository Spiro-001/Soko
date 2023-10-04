import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: PostType }) => {
  console.log(post);
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
            {new Date(post.createdAt)
              .toLocaleDateString("en-US", {
                dateStyle: "short",
              })
              .replace(/\//g, ".")}
          </span>
          <span className="bg-zinc-900 text-stone-200 px-2 rounded-sm h-fit">
            {new Date(post.createdAt).toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="bg-gray-200 px-4 py-2 rounded-sm">{post.content}</div>
      <div className="ml-auto flex gap-2">
        {post.tags.map((tag, idx) => (
          <span
            key={post.id + tag + idx}
            className="px-3 bg-stone-200 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Post;
