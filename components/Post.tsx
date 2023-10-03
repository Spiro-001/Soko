import React from "react";

const Post = ({ post }: { post: PostType }) => {
  return (
    <section className="flex flex-col border border-black px-8 py-4 w-full">
      <div>{post.id}</div>
      <div>
        {post.tags.map((tag) => (
          <span key={post.id + tag}>{tag}</span>
        ))}
      </div>
      <div>{post.content}</div>
      <div>{post.userId}</div>
    </section>
  );
};

export default Post;
