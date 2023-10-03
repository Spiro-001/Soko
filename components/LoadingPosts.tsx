import React from "react";
import LoadingPost from "./LoadingPost";

const LoadingPosts = ({ amount }: { amount: number }) => {
  const loadingPosts = new Array(amount);
  loadingPosts.fill(0);

  return (
    <>
      {loadingPosts.map((empty, idx) => (
        <LoadingPost key={idx} />
      ))}
    </>
  );
};

export default LoadingPosts;
