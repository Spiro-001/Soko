import LoadingPosts from "@/components/LoadingPosts";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 gap-4 xl:flex hidden"></div>
      <div className="row-start-1 row-end-7 pt-8 pb-16 px-4 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4">
        <LoadingPosts amount={10} />
      </div>
      <div className="row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden"></div>
    </>
  );
};

export default loading;
