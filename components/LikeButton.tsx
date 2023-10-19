"use client";

import { createPostClient } from "@/utils/createPostClient";
import { createPostLikeClient } from "@/utils/createPostLikeClient";
import { deletePostLikeClient } from "@/utils/deletePostLikeClient";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import React, { useState } from "react";

const LikeButton = ({
  postLike,
  post,
}: {
  postLike: PostLikeType[];
  post: PostType;
}) => {
  const [like, setLike] = useState(
    postLike?.some(
      (ele) => ele.userId === "94b54024-efdf-4379-b36c-f2331e8ff079"
    )
  );
  const [likedPost, setLikedPost] = useState(
    postLike?.find(
      (ele) => ele.userId === "94b54024-efdf-4379-b36c-f2331e8ff079"
    )?.id
  );
  const [likeNode, setLikeNode] = useState(
    like ? (
      <FavoriteRounded sx={{ height: 22, color: "rgba(239, 68, 68)" }} />
    ) : (
      <FavoriteBorderRounded sx={{ color: "rgb(180, 180, 180)", height: 22 }} />
    )
  );
  const [totalLikes, setTotalLikes] = useState(postLike?.length ?? 0);

  const handleLike = async () => {
    const postLike = await createPostLikeClient(
      "94b54024-efdf-4379-b36c-f2331e8ff079",
      post.id
    );
    setLikeNode(
      <FavoriteRounded sx={{ height: 22, color: "rgba(239, 68, 68)" }} />
    );
    setLikedPost(postLike.id);
    setTotalLikes((prev) => prev + 1);
    setLike(true);
  };

  const handleUnlike = async () => {
    if (likedPost) {
      const deletePostLike = await deletePostLikeClient(likedPost);
      setLikeNode(
        <FavoriteBorderRounded
          sx={{ color: "rgb(180, 180, 180)", height: 22 }}
        />
      );
      setTotalLikes((prev) => prev - 1);
      setLike(false);
    }
  };

  return (
    <button
      className="underline-offset-2 flex gap-x-1 items-center"
      onClick={like ? handleUnlike : handleLike}
    >
      {likeNode}
      <span className="text-xs text-neutral-400 font-semibold">
        {totalLikes}
      </span>
    </button>
  );
};

export default LikeButton;
