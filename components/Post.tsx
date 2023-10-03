import Link from "next/link";
import React from "react";

const Post = ({ post }: { post: PostType }) => {
  return (
    <section className="flex flex-col border border-black px-8 py-6 w-full gap-y-4">
      <div className="flex gap-2 items-center">
        <Link
          href={`/user/${post.User.id}`}
          className="bg-slate-200 px-2 font-bold"
        >
          {post.User.username}
        </Link>
        {"</>"}
        <Link
          href={`/post/${post.id}`}
          className="bg-slate-200 px-2 text-gray-500"
        >
          {post.id}
        </Link>
      </div>
      <div className="bg-gray-200 px-4 py-2">{post.content}</div>
      <div className="ml-auto flex gap-2">
        {post.tags.map((tag) => (
          <span key={post.id + tag} className="px-2 bg-stone-200">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Post;
