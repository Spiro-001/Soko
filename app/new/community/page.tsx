"use client";

import { InputTags } from "@/components/InputTags";
import { createCommunityClient } from "@/utils/createCommunityClient";
import { TextareaAutosize } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { MouseEvent, useRef, useState } from "react";

const NewCommunity = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const newCommunity = await createCommunityClient({
      title,
      description,
      ownerId: "94b54024-efdf-4379-b36c-f2331e8ff079",
      tags,
    });
    router.push(`/community/${newCommunity.id}`);
  };

  return (
    <div className="row-start-1 row-end-7 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px] border border-black">
      <div className="flex flex-col flex-1 py-8 px-4">
        <span className="text-2xl">New Community</span>
        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          className="flex-1 py-4 flex flex-col gap-y-4"
        >
          <div className="flex gap-x-4 flex-wrap">
            <div className="w-36 h-36 border-2 border-black rounded-full border-dashed"></div>
            <div className="flex-1 border border-black"></div>
          </div>
          <TextareaAutosize
            name="title"
            placeholder="Title"
            className="border border-neutral-200 px-4 py-2 outline-none resize-none"
            minRows={1}
          />
          <TextareaAutosize
            name="description"
            placeholder="Description (optional)"
            className="border border-neutral-200 px-4 py-2 outline-none resize-none"
            minRows={3}
          />
          <InputTags tags={tags} setTags={setTags} />
          <button
            className="border w-fit ml-auto"
            type="button"
            onClick={handleSubmit}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCommunity;
