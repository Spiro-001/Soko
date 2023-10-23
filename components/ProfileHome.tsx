import Image from "next/image";
import React from "react";
import Track from "./Track";

const ProfileHome = () => {
  return (
    <div>
      <div className="flex flex-col">
        <span className="font-bold pb-2 text-lg">Featured Track</span>
        <Track />
      </div>
    </div>
  );
};

export default ProfileHome;
