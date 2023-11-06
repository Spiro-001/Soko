"use client";

import { deleteSPhotoFromS3 } from "@/aws/s3_aws";
import { deletePostClient } from "@/utils/deletePostClient";
import { patchPostClient } from "@/utils/patchPostClient";
import { Delete, Edit, MoreVert, Report } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const MoreMenuPost = ({
  post,
  setPostsState,
  session,
}: {
  post: PostType;
  setPostsState?: Dispatch<SetStateAction<PostType[]>>;
  session: Session | null;
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
    const menu = document.getElementById("open-menu-post");
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
      const deletedPost = await deletePostClient(post.id);
      const deletedImage = await deleteSPhotoFromS3(`${post.id}-post`);
      if (setPostsState) {
        setPostsState((prev: PostType[]) => {
          return prev.filter((post) => post.id !== deletedPost.id);
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
    const postContainer = document.getElementById(`${post.id}-container`);
    const postContent = document.getElementById(`${post.id}-content`);
    const postHeadline = document.getElementById(`${post.id}-headline`);
    if (postContainer && postContent && postHeadline) {
      postContent.style.border = "1px solid rgb(37 99 235)";
      postHeadline.style.border = "1px solid rgb(37 99 235)";
      postContent.contentEditable = "true";
      postHeadline.contentEditable = "true";
      const onClickOutside = async (event: any) => {
        if (!postContainer.contains(event.target)) {
          setEdit({ open: false, loading: true });
          postContent.style.border = "";
          postHeadline.style.border = "";
          postContent.contentEditable = "false";
          postHeadline.contentEditable = "false";
          document.removeEventListener("mousedown", onClickOutside);
          const newPostContent = postContent.innerText;
          const newPostHeadline = postHeadline.innerText;
          if (
            newPostContent !== post.content ||
            newPostHeadline !== post.headline
          ) {
            const editPost = await patchPostClient(post.id, {
              headline: newPostHeadline,
              content: newPostContent,
            });
          }
          setEdit({ open: false, loading: false });
        }
      };
      document.addEventListener("mousedown", onClickOutside);
    }
  };

  const submitEdit = async () => {
    const postContainer = document.getElementById(`${post.id}-container`);
    const postContent = document.getElementById(`${post.id}-content`);
    const postHeadline = document.getElementById(`${post.id}-headline`);
    if (postContainer && postContent && postHeadline) {
      setEdit({ open: false, loading: true });
      postContent.style.border = "";
      postHeadline.style.border = "";
      postContent.contentEditable = "false";
      postHeadline.contentEditable = "false";
      const newPostContent = postContent.innerText;
      const newPostHeadline = postHeadline.innerText;
      if (
        newPostContent !== post.content ||
        newPostHeadline !== post.headline
      ) {
        const editPost = await patchPostClient(post.id, {
          headline: newPostHeadline,
          content: newPostContent,
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
          className="absolute border border-neutral-200 top-full right-0 whitespace-nowrap bg-white px-2 py-2 rounded-md shadow-md"
          id="open-menu-post"
        >
          {session?.user.id === post.User.id && (
            <>
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
            </>
          )}
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

export default MoreMenuPost;
