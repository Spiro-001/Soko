import Image from "next/image";
import React from "react";
import Track from "./Track";
import Bio from "./Bio";

const ProfileHome = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col">
        <span className="font-bold pb-2 text-lg underline underline-offset-2">
          Bio
        </span>
        <Bio
          bio={
            "I'm Daniel, the founder of @BASEMENT, the music networking app that's redefining how artists connect and collaborate. Join me in building a global stage for musicians and fans worldwide.\n\n#MusicUnites"
          }
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold pb-2 text-lg underline underline-offset-2">
          Featured Track
        </span>
        <Track />
      </div>
    </div>
  );
};

export default ProfileHome;
