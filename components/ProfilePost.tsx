"use client";

import React, { useState } from "react";
import Post from "./Post";
import FilterAndSortPost from "./FilterAndSortPost";
import ProfilePostSearch from "./ProfilePostSearch";
import { CircularProgress } from "@mui/material";
import { getSPhotoFromS3 } from "@/aws/s3_aws";

const ProfilePost = ({
  posts,
  session,
}: {
  posts: PostType[];
  session: Session;
}) => {
  const [postsState, setPostsState] = useState<PostType[]>(posts);
  const [loading, setLoading] = useState(false);

  const renderPosts = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-8">
          <CircularProgress />
        </div>
      );
    } else {
      if (postsState.length === 0) {
        return (
          <div className="flex items-center justify-center py-14 text-lg text-neutral-500">
            <span className="px-4 py-1 bg-white rounded-md border border-neutral-200 shadow-sm">
              {"There's nothing here right now. Come back later!"}
            </span>
          </div>
        );
      } else {
        return postsState.map((post) => {
          const getImage = async () => {
            const image = await getSPhotoFromS3(`${post.id}-post`);
            return (
              <Post
                image={image}
                post={post}
                session={session}
                setPostsState={setPostsState}
                key={post.id}
              />
            );
          };
          return getImage();
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-between items-center border border-neutral-200 rounded-md shadow-sm bg-white">
        <FilterAndSortPost
          setPostsState={setPostsState}
          id={session.user.id}
          setLoading={setLoading}
        />
        <ProfilePostSearch
          id={session.user.id}
          setPostsState={setPostsState}
          setLoading={setLoading}
        />
      </div>
      {renderPosts()}
    </div>
  );
};

export default ProfilePost;
