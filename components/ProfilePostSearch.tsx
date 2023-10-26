import { getPostBySearchClient } from "@/utils/getPostBySearchClient";
import { Input } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from "react";

const ProfilePostSearch = ({
  setPostsState,
  setLoading,
  id,
}: {
  setPostsState: Dispatch<SetStateAction<PostType[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  id: string;
}) => {
  const handleSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = (formData.get("search") as string) ?? "";
    setLoading(true);
    const posts = await getPostBySearchClient(query, id);
    setLoading(false);
    setPostsState(posts);
  };
  return (
    <form onSubmit={handleSearch} className="px-6">
      <input
        name="search"
        className="border border-neutral-200 rounded-full py-1 px-4 outline-none hover:border-blue-600 focus:border-blue-600"
        placeholder="Looking for something..."
      />
    </form>
  );
};

export default ProfilePostSearch;
