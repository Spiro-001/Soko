"use client";

import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const Test = () => {
  const [message, setMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [s3Image, setS3Image] = useState("");

  const storeFile = (file: FileList | null) => {
    if (file) {
      setFile(file[0]);
    }
  };

  const uploadFile = async () => {
    if (file) {
      setMessage("Uploading...");
      const returnData = await uploadSPhotoToS3(file);
      console.log(returnData);
      setMessage("Upload Complete");
      let imageURL = await getSPhotoFromS3(file.name);
      console.log(imageURL);
      // setS3Image(imageURL);
      setFile(null);
    }
  };

  return (
    <div>
      <p>upload file:</p>
      <p style={{ color: "red" }}>{message}</p>
      <input
        type="file"
        onChange={(e) => storeFile(e.target.files)}
        accept="image/png"
      />
      <input type="button" onClick={uploadFile} defaultValue="Send" />
      <Image src={s3Image} height={50} width={50} alt="test" />
    </div>
  );
};

export default Test;
