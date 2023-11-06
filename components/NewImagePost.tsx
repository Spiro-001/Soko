"use client";

import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";
import { Photo } from "@mui/icons-material";
import Image from "next/image";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const NewImagePost = ({
  session,
  setImage,
}: {
  session: Session;
  setImage: Dispatch<SetStateAction<File | null>>;
}) => {
  const [profileState, setProfileState] = useState<string>("");

  const handleInput = () => {
    const post = document.getElementById("post-image-input");
    if (post) {
      post.click();
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setProfileState(url);
      setImage(file);
    }
  };

  return (
    <div className="relative flex items-center border border-black border-dashed max-w-[280px] max-h-[280px] rounded-md">
      <span
        className="absolute w-full h-full cursor-pointer hover:bg-neutral-400 z-20 opacity-50 rounded-md"
        onClick={handleInput}
      ></span>
      {profileState.length === 0 ? (
        <div className="flex flex-col h-72 items-center justify-center w-full gap-y-2">
          <Photo />
          <span>Select an Image</span>
        </div>
      ) : (
        <Image
          src={profileState}
          width={1}
          height={1}
          alt="profile"
          className="rounded-md text-lg object-cover w-full h-full border border-black"
          id="profile-picture"
          unoptimized
        />
      )}
      <input
        id="post-image-input"
        type="file"
        accept="image/png, image/jpeg"
        className="absolute opacity-0 w-full h-full"
        onChange={handleChange}
        title={profileState}
      />
    </div>
  );
};

export default NewImagePost;
