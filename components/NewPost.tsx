"use client";

import { TextareaAutosize } from "@mui/material";
import React, { MouseEvent, SyntheticEvent, useRef, useState } from "react";
import { InputTags } from "./InputTags";
import { createPostClient } from "@/utils/createPostClient";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import NewImagePost from "./NewImagePost";
import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";

const NewPost = ({
  type,
  selector,
}: {
  type: "post" | "image" | "video" | "community";
  selector: Record<string, string>;
}) => {
  const [tags, setTags] = useState<Array<string>>([]);
  const [image, setImage] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const session = useSession().data as Session;

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (selector.id !== "null" && session.user && session.user.id) {
      const form = formRef.current;
      const formData = new FormData(form as HTMLFormElement);
      const headline = formData.get("headline") as string;
      const content = formData.get("content") as string;

      const newPost = await createPostClient({
        userId: session.user.id,
        headline,
        content: content,
        communityId: selector.id,
        tags,
        hasImage: image !== null,
      });

      if (image) {
        const response = await uploadSPhotoToS3(image, `${newPost.id}-post`);
      }

      if (newPost) {
        router.push(`/post/${newPost.id}`);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      ref={formRef}
      className="flex-1 border-x border-b border-neutral-200 rounded-b-md px-4 py-4 flex flex-col gap-y-2 shadow-sm"
    >
      <NewImagePost session={session} setImage={setImage} />
      <TextareaAutosize
        name="headline"
        placeholder="Headline"
        className="border border-neutral-200 px-4 py-2 outline-none resize-none h-11 min-h-[42px] max-h-[42px] rounded-sm"
        minRows={1}
        maxLength={50}
      />
      <TextareaAutosize
        name="content"
        placeholder="What's on your mind?"
        className="border border-neutral-200 px-4 py-2 outline-none min-h-[84px] max-h-[750px]"
        minRows={1}
        maxLength={1500}
      />
      <InputTags tags={tags} setTags={setTags} />
      <button
        type="button"
        className="w-fit ml-auto border px-4 py-1 bg-green-300 text-white rounded-md"
        onClick={handleSubmit}
      >
        Post
      </button>
    </form>
  );
};

export default NewPost;
