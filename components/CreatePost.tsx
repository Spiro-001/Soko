"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreatePost = () => {
  return (
    <div className="px-5 py-3 flex gap-x-4 items-center w-full">
      <Image
        src="/no-profile.png"
        width={45}
        height={45}
        alt="profile"
        className="border-2 border-black rounded-full"
      />
      <Link href="/submit" className="flex-1">
        <input
          placeholder="Create Post"
          className="w-full border border-black px-4 py-2 outline-none"
        />
      </Link>
      <span>picture</span>
    </div>
  );
};

export default CreatePost;
