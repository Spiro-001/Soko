"use client";

import { TextareaAutosize } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";

const NewPost = ({
  type,
  selector,
}: {
  type: "post" | "image" | "video" | "community";
  selector?: Record<string, string>;
}) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    const title = formData.get("title");
    const content = formData.get("content");
    console.log(title, content, selector);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 border-x border-b border-black px-4 py-4 flex flex-col gap-y-2"
    >
      <TextareaAutosize
        name="title"
        placeholder="Title"
        className="border border-neutral-200 px-4 py-2 outline-none resize-none"
        minRows={1}
      />
      <div className="flex flex-col h-fit">
        <TextareaAutosize
          name="content"
          placeholder="Text (optional)"
          className="border border-neutral-200 px-4 py-2 outline-none resize-none"
          minRows={1}
        />
      </div>
      <button>Post</button>
    </form>
  );
};

export default NewPost;
