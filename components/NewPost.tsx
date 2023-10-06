"use client";

import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewPost = ({ type }: { type: "post" | "image" | "video" }) => {
  const [editorValue, setEditorValue] = useState("");

  const handleInput = (value: string) => {
    setEditorValue(value);
  };

  return (
    <form className="flex-1 border-x border-b border-black px-4 py-4 flex flex-col gap-y-2">
      <TextareaAutosize
        placeholder="Title"
        className="border border-neutral-200 px-4 py-2 outline-none resize-none"
        minRows={1}
      />
      <div className="flex flex-col h-fit">
        <TextareaAutosize
          placeholder="Text (optional)"
          className="border border-neutral-200 px-4 py-2 outline-none resize-none"
          minRows={1}
        />
        {/* <ReactQuill
          value={editorValue}
          onChange={handleInput}
          modules={{
            toolbar: [
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          }}
          theme="snow"
        /> */}
      </div>
      <button>Post</button>
    </form>
  );
};

export default NewPost;
