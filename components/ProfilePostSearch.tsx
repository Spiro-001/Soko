import { getPostBySearchClient } from "@/utils/getPostBySearchClient";
import { Input } from "@mui/material";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

const ProfilePostSearch = ({
  setPostsState,
}: {
  setPostsState: Dispatch<SetStateAction<PostType[]>>;
}) => {
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const posts = await getPostBySearchClient(query);
    setPostsState(posts);
  };
  return (
    <div className="px-6">
      <input
        className="border border-neutral-200 rounded-full py-1 px-4 outline-none hover:border-blue-600 focus:border-blue-600"
        placeholder="Looking for something..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default ProfilePostSearch;
