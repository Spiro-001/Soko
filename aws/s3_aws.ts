import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId:
      process.env.NEXT_PUBLIC_AWS_S3_CLIENT_ACCESS_KEY ?? "ENV_VAR_NOT_FOUND",
    secretAccessKey:
      process.env.NEXT_PUBLIC_AWS_S3_CLIENT_SECRET_KEY ?? "ENV_VAR_NOT_FOUND",
  },
});

// const s3Client = new S3({
//   region: "us-east-1",
//   signatureVersion: "v4",
//   accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_CLIENT_ACCESS_KEY,
//   secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_CLIENT_SECRET_KEY,
// });

export const uploadSPhotoToS3 = async (photo: File) => {
  try {
    const putCommand = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME ?? "ENV_VAR_NOT_FOUND",
      Key: photo.name,
      ContentType: photo.type,
      Body: photo,
    });

    const url = await getSignedUrl(s3, putCommand, { expiresIn: 60 });
    const response = await s3.send(putCommand);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSPhotoFromS3 = async (photoId: string) => {
  try {
    const getCommand = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: photoId,
    });

    const url = await getSignedUrl(s3, getCommand, { expiresIn: 60 });
    return url;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export const deleteSPhotoFromS3 = async (photoId: string) => {
  try {
    const deleteCommand = new DeleteObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Key: photoId,
    });

    const response = await s3.send(deleteCommand);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
