import LoadingPosts from "@/components/LoadingPosts";
import React from "react";

const loading = () => {
  return (
    <div className="border border-black row-start-1 row-end-7 col-start-2 col-end-4 flex flex-col items-center py-16 px-4 gap-4">
      <LoadingPosts amount={10} />
    </div>
  );
};

export default loading;
