import { Box, TextField } from "@mui/material";
import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { Tags } from "./Tags";

export const InputTags = ({
  tags,
  setTags,
}: {
  tags: Array<string>;
  setTags: Dispatch<SetStateAction<Array<string>>>;
}) => {
  const tagRef = useRef<HTMLInputElement>();

  const handleDelete = (value: string) => {
    const newtags = tags.filter((val) => val !== value);
    setTags(newtags);
  };
  const handleOnSubmit = (e: KeyboardEvent) => {
    if (
      tagRef.current &&
      e.key === "Enter" &&
      tags.length < 5 &&
      tagRef.current.value.length < 16
    ) {
      if (tags.includes(tagRef.current.value)) {
        tagRef.current.value = "";
      } else {
        setTags([...tags, tagRef.current.value]);
        tagRef.current.value = "";
      }
    }
  };
  return (
    <div onKeyDown={handleOnSubmit}>
      <TextField
        inputRef={tagRef}
        fullWidth
        variant="standard"
        size="small"
        sx={{ margin: "1rem 0" }}
        margin="none"
        placeholder={tags.length < 3 ? "Enter tags" : ""}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                margin: "0 0.2rem 0 0",
                display: "flex",
              }}
            >
              {tags.map((data, index) => {
                return (
                  <Tags data={data} handleDelete={handleDelete} key={index} />
                );
              })}
            </Box>
          ),
        }}
      />
    </div>
  );
};
