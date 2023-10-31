"use client";

import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const Banner = ({
  banner,
  profile,
}: {
  banner: string;
  profile: ProfileType;
}) => {
  const [bannerState, setBannerState] = useState(banner);

  const handleInput = () => {
    const banner = document.getElementById("banner");
    if (banner) {
      banner.click();
    }
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setBannerState(url);
      const response = await uploadSPhotoToS3(file, `${profile.id}-banner`);
      const imageUrl = await getSPhotoFromS3(`${profile.id}-banner`);
    }
  };

  return (
    <div className="relative flex flex-1">
      <Image
        src={bannerState}
        alt="community-picture"
        className="object-cover rounded-md border"
        fill
      />
      <span
        className="cursor-pointer w-full h-full hover:bg-neutral-400 opacity-50 z-10 rounded-md"
        onClick={handleInput}
      ></span>
      <input
        id="banner"
        type="file"
        accept="image/png, image/jpeg"
        className="absolute opacity-0"
        onChange={handleChange}
        title={bannerState}
      />
    </div>
  );
};

export default Banner;
