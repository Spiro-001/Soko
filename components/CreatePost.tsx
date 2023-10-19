"use client";

import { usePathname } from "next/navigation";
import { Photo } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreatePost = () => {
  const pathName = usePathname().split("/");
  return (
    <div className="px-5 py-3 flex gap-x-4 items-center w-full">
      <Image
        src="/no-profile.png"
        width={45}
        height={45}
        alt="profile"
        className="border border-black rounded-full"
      />
      <Link
        href={`/submit?community=${pathName[2] ?? "public"}`}
        className="flex-1"
      >
        <input
          placeholder="Create Post"
          className="w-full border border-neutral-200 px-4 py-2 outline-none rounded-full hover:border-blue-600"
        />
      </Link>
      <Link href={`/submit?community=${pathName[2] ?? "public"}?type=photo`}>
        <Photo />
      </Link>
    </div>
  );
};

export default CreatePost;
