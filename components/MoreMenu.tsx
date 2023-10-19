"use client";

import { deletePostClient } from "@/utils/deletePostClient";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const MoreMenu = ({
  post,
  setPostsState,
}: {
  post: PostType;
  setPostsState: Dispatch<SetStateAction<PostType[]>>;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (e: MouseEvent) => {
    setOpen((prev) => !prev);
  };

  const handleDelete = async (e: MouseEvent) => {
    try {
      const deletedPost = await deletePostClient(post.id);
      console.log(deletedPost);
      setPostsState((prev: PostType[]) => {
        console.log(prev);
        return prev.filter((post) => post.id !== deletedPost.id);
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e: MouseEvent) => {};

  return (
    <div className="relative">
      <button onClick={handleOpenMenu}>
        <MoreVert />
      </button>
      {open && (
        <ul
          className="absolute border right-0 whitespace-nowrap bg-white px-2"
          onMouseLeave={handleOpenMenu}
        >
          <li className="flex pl-3 pr-4 py-2 border-b" onClick={handleDelete}>
            <button className="flex gap-x-2">
              <Delete />
              <span>Delete</span>
            </button>
          </li>
          <li className="flex pl-3 pr-4 py-2" onClick={handleEdit}>
            <button className="flex gap-x-2">
              <Edit />
              <span>Edit</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MoreMenu;
