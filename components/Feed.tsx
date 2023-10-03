"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import Post from "./Post";

const Feed = ({ posts }: { posts: PostType[] }) => {
  const [filter, setFilter] = useState<string>("");
  const [resultsFound, setResultsFound] = useState(posts.length);
  const handleSearchFilter = (post: PostType) => {
    if (filter.length === 0) return post;
    const searchParams = [
      post.id,
      ...post.tags,
      post.User.id,
      post.User.username,
    ];
    const postContentRegExp = new RegExp(`${filter}`, "i");
    if (searchParams.includes(filter) || postContentRegExp.test(post.content))
      return post;
  };

  const handleSearch = (event: MouseEvent) => {
    event.preventDefault();
    const input = document.getElementById("input-search");
    const searchValue = (input as HTMLInputElement).value;
    setFilter(searchValue);
  };

  useEffect(() => {
    const resultsFound = posts.filter(handleSearchFilter).length;
    setResultsFound(resultsFound);
  }, [filter]);

  return (
    <>
      <form className="w-full relative flex items-center">
        <input
          id="input-search"
          className="border border-black w-full px-4 py-2 outline-none"
          placeholder="Search..."
        />
        <button
          className="absolute right-3 bg-blue-200 px-3 py-0.5 rounded-sm"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      <span className="w-full px-2 font-bold">
        {resultsFound} results found
      </span>
      {posts.filter(handleSearchFilter).map((post: PostType) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Feed;
