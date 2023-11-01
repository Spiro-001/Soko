import { Readable } from "stream";

const axios = require("axios");

export const toDataURL = async (url: string) => {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const contentType = response.headers["content-type"];
  const data = Buffer.from(response.data, "binary").toString("base64");
  const dataUrl = `data:${contentType};base64,${data}`;
  return dataUrl;
};

export const dataURLtoBlob = (dataURL: string, fileName: string) => {
  try {
    const dataPart = dataURL.split(",")[1];
    const buffer = Buffer.from(dataPart, "base64");
    const blob = new Blob([buffer], { type: "image/jpeg" });
    console.log(blob);
    return blob;
  } catch (error) {
    console.log(error);
    return null;
  }
};
