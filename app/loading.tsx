import LoadingPosts from "@/components/LoadingPosts";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden"></div>
      <div className="row-start-1 row-end-7 pb-16 lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 flex max-w-[960px] px-8 pt-4">
        <LoadingPosts amount={10} />
      </div>
      <div className="row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 lg:flex hidden max-w-[360px] xl:max-w-[480px]">
        <div className="top-56 sticky w-full"></div>
      </div>
    </>
  );
};

export default loading;
