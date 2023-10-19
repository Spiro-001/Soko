"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("");

  const handleSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push(`/search?query=${filter}`);
  };

  return (
    <div className="w-full flex flex-col relative">
      <form className="relative flex items-center" onSubmit={handleSubmit}>
        <input
          id="input-search"
          className="border border-neutral-200 w-full px-6 py-2 outline-none rounded-full hover:border-blue-600 focus:border-blue-600 focus:rounded-t-3xl focus:rounded-b-none"
          placeholder="Looking for something..."
          onChange={handleSearchFilter}
          autoComplete="off"
        />
      </form>
      {/* <div className="absolute bg-black w-full top-full">Menu</div> */}
    </div>
  );
};

export default Search;
