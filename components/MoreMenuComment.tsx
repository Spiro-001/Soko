"use client";

import { deleteCommentClient } from "@/utils/deleteCommentClient";
import { patchCommentClient } from "@/utils/patchCommentClient";
import { Delete, Edit, MoreVert, Report } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const MoreMenuComment = ({
  comment,
  setCommentsState,
}: {
  comment: CommentType;
  setCommentsState?: Dispatch<SetStateAction<CommentType[]>>;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<Record<string, boolean>>({
    open: false,
    loading: false,
  });

  const handleOpenMenu = (e: MouseEvent) => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = (e: MouseEvent) => {
    const menu = document.getElementById("open-menu-comment");
    if (menu) {
      const onClickOutside = (event: any) => {
        if (!menu.contains(event.target)) {
          setOpen(false);
        }
        document.removeEventListener("mousedown", onClickOutside);
      };
      document.addEventListener("mousedown", onClickOutside);
    }
  };

  const handleDelete = async (e: MouseEvent) => {
    try {
      const deletedComment = await deleteCommentClient(comment.id);
      if (setCommentsState) {
        setCommentsState((prev: CommentType[]) => {
          return prev.filter((comment) => comment.id !== deletedComment.id);
        });
      } else {
        // This most likely means that we are being used in the /post route which doesn't require a postsState
        router.refresh();
        router.push("/");
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e: MouseEvent) => {
    setOpen(false);
    setEdit({
      open: true,
      loading: false,
    });
    const commentContainer = document.getElementById(`${comment.id}-container`);
    const commentContent = document.getElementById(`${comment.id}-content`);
    if (commentContainer && commentContent) {
      commentContent.style.border = "1px solid rgb(37 99 235)";
      commentContent.style.padding = "4px 8px";
      commentContent.contentEditable = "true";
      const onClickOutside = async (event: any) => {
        if (!commentContainer.contains(event.target)) {
          setEdit({ open: false, loading: true });
          commentContent.style.border = "";
          commentContent.style.padding = "";
          commentContent.contentEditable = "false";
          document.removeEventListener("mousedown", onClickOutside);
          const newCommentContent = commentContent.innerText;
          if (newCommentContent !== comment.content) {
            const editComment = await patchCommentClient(comment.id, {
              content: newCommentContent,
            });
          }
          setEdit({ open: false, loading: false });
        }
      };
      document.addEventListener("mousedown", onClickOutside);
    }
  };

  const submitEdit = async () => {
    const commentContainer = document.getElementById(`${comment.id}-container`);
    const commentContent = document.getElementById(`${comment.id}-content`);
    if (commentContainer && commentContent) {
      setEdit({ open: false, loading: true });
      commentContent.style.border = "";
      commentContent.contentEditable = "false";
      const newCommentContent = commentContent.innerText;
      if (newCommentContent !== comment.content) {
        const editComment = await patchCommentClient(comment.id, {
          content: newCommentContent,
        });
      }
      setEdit({ open: false, loading: false });
    }
  };

  return (
    <div className="relative flex">
      {edit.open && (
        <button
          className="text-sm px-3 py-0.5 bg-green-300 rounded-md flex"
          onClick={submitEdit}
        >
          Save
        </button>
      )}
      {edit.loading && (
        <button
          className="text-sm px-3 py-0.5 bg-green-300 rounded-md flex"
          onClick={submitEdit}
        >
          <CircularProgress size="22px" sx={{ color: "white" }} />
        </button>
      )}
      <button onClick={handleOpenMenu} onMouseLeave={handleCloseMenu}>
        <MoreVert />
      </button>
      {open && (
        <ul
          className="absolute border border-neutral-200 top-full right-0 whitespace-nowrap bg-white px-2 py-2 rounded-md shadow-md z-10"
          id="open-menu-comment"
        >
          <li className="flex" onClick={handleDelete}>
            <button className="flex gap-x-2 pl-3 pr-4 py-2 items-center">
              <Delete />
              <span>Delete</span>
            </button>
          </li>
          <li className="flex" onClick={handleEdit}>
            <button className="flex pl-3 pr-4 py-2 gap-x-2 items-center">
              <Edit />
              <span>Edit</span>
            </button>
          </li>
          <li className="flex">
            <button className="flex pl-3 pr-4 py-2 gap-x-2 items-center">
              <Report />
              <span>Report</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MoreMenuComment;
