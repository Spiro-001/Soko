"use client";

import { deletePostClient } from "@/utils/deletePostClient";
import { patchCommentClient } from "@/utils/patchCommentClient";
import { patchPostClient } from "@/utils/patchPostClient";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const MoreMenuPost = ({
  post,
  setPostsState,
}: {
  post: PostType;
  setPostsState?: Dispatch<SetStateAction<PostType[]>>;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (e: MouseEvent) => {
    setOpen((prev) => !prev);
  };

  const handleDelete = async (e: MouseEvent) => {
    try {
      const deletedPost = await deletePostClient(post.id);
      console.log(deletePostClient);
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
    const postContainer = document.getElementById(`${post.id}-container`);
    const postContent = document.getElementById(`${post.id}-content`);
    const postHeadline = document.getElementById(`${post.id}-headline`);
    if (postContainer && postContent && postHeadline) {
      postContent.contentEditable = "true";
      postHeadline.contentEditable = "true";
      const onClickOutside = async (event: any) => {
        if (!postContainer.contains(event.target)) {
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
        }
      };
      document.addEventListener("mousedown", onClickOutside);
    }
  };

  return (
    <div className="relative">
      <button onClick={handleOpenMenu}>
        <MoreVert />
      </button>
      {open && (
        <ul
          className="absolute border border-neutral-200 right-0 whitespace-nowrap bg-white px-2 py-2 rounded-md shadow-md"
          onMouseLeave={handleOpenMenu}
        >
          <li className="flex border-b" onClick={handleDelete}>
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
        </ul>
      )}
    </div>
  );
};

export default MoreMenuPost;
