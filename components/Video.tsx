import React from "react";

const Video = () => {
  return (
    <div className="flex w-full">
      <video className="aspect-video rounded-md w-full" controls={true}>
        <source src="/earth.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
