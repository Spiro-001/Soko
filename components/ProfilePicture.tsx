"use client";

import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const ProfilePicture = ({
  session,
  profile,
}: {
  session: Session;
  profile: string;
}) => {
  const [profileState, setProfileState] = useState(profile);

  const handleInput = () => {
    const profile = document.getElementById("profile-picture-input");
    if (profile) {
      profile.click();
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setProfileState(url);
      const response = await uploadSPhotoToS3(
        file,
        `${session.user.id}-profile`
      );
      const imageUrl = await getSPhotoFromS3(`${session.user.id}-profile`);
    }
  };

  return (
    <div className="relative flex">
      <Image
        src={profileState ?? "/no-profile.png"}
        width={100}
        height={100}
        alt="profile"
        className="rounded-full text-lg border-4 border-green-300 object-cover aspect-square max-h-[100px] max-w-[100px] bg-white"
        id="profile-picture"
        unoptimized
      />
      <span
        className="absolute w-full h-full cursor-pointer hover:bg-neutral-400 opacity-50 z-20 rounded-full"
        onClick={handleInput}
      ></span>
      <input
        id="profile-picture-input"
        type="file"
        accept="image/png, image/jpeg"
        className="absolute opacity-0 w-full h-full"
        onChange={handleChange}
        title={profileState}
      />
    </div>
  );
};

export default ProfilePicture;
