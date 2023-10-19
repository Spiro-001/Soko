"use client";

import { TextareaAutosize } from "@mui/material";
import React, { MouseEvent, SyntheticEvent, useRef, useState } from "react";
import { InputTags } from "./InputTags";
import { createPostClient } from "@/utils/createPostClient";
import { useRouter } from "next/navigation";

const NewPost = ({
  type,
  selector,
}: {
  type: "post" | "image" | "video" | "community";
  selector: Record<string, string>;
}) => {
  const [tags, setTags] = useState<Array<string>>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (selector.id !== "null") {
      const form = formRef.current;
      const formData = new FormData(form as HTMLFormElement);
      const headline = formData.get("headline") as string;
      const content = formData.get("content") as string;

      const newPost = await createPostClient({
        userId: "94b54024-efdf-4379-b36c-f2331e8ff079",
        headline,
        content,
        communityId: selector.id,
        tags,
      });

      if (newPost) {
        router.push(`/post/${newPost.id}`);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
      className="flex-1 border-x border-b border-black px-4 py-4 flex flex-col gap-y-2"
    >
      <TextareaAutosize
        name="headline"
        placeholder="Headline"
        className="border border-neutral-200 px-4 py-2 outline-none resize-none"
        minRows={1}
      />
      <TextareaAutosize
        name="content"
        placeholder="What's on your mind?"
        className="border border-neutral-200 px-4 py-2 outline-none resize-none"
        minRows={1}
      />
      <InputTags tags={tags} setTags={setTags} />
      <button
        type="button"
        className="w-fit ml-auto border"
        onClick={handleSubmit}
      >
        Post
      </button>
    </form>
  );
};

export default NewPost;
