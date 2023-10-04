import LoadingPosts from "@/components/LoadingPosts";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="border border-black row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 gap-4 xl:flex hidden"></div>
      <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-3 flex flex-col items-center py-16 px-4 gap-4">
        <LoadingPosts amount={10} />
      </div>
      <div className="border border-black row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 xl:flex hidden"></div>
    </>
  );
};

export default loading;
