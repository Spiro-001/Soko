"use client";

import React, { ChangeEvent, SyntheticEvent, useState } from "react";

const Search = () => {
  const [filter, setFilter] = useState<string>("");

  const handleSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(filter);
  };

  return (
    <div className="w-full flex flex-col relative">
      <form className="relative flex items-center" onSubmit={handleSubmit}>
        <input
          id="input-search"
          className="border border-black w-full px-4 py-2 outline-none"
          placeholder="Search..."
          onChange={handleSearchFilter}
        />
      </form>
      {/* <div className="absolute bg-black w-full top-full">Menu</div> */}
    </div>
  );
};

export default Search;
