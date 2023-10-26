import React from "react";
import Track from "./Track";
import Bio from "./Bio";
import Video from "./Video";

const ProfileHome = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col mb-4">
        <span className="font-semibold py-2 text-sm px-4 mb-4 z-20 rounded-md border border-blue-200 shadow-sm bg-white">
          Bio
        </span>
        <div className="px-4 py-3 bg-neutral-50 rounded-md border border-neutral-100 shadow-sm">
          <Bio
            bio={
              "I'm Daniel, the founder of @BASEMENT, the music networking app that's redefining how artists connect and collaborate. Join me in building a global stage for musicians and fans worldwide.\n\n#MusicUnites"
            }
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <span className="font-semibold py-2 text-sm px-4 mb-4 z-20 rounded-md border border-blue-200 shadow-sm bg-white">
          Featured Track
        </span>
        <Track />
      </div>
      <div className="flex flex-col mb-4">
        <span className="font-semibold py-2 text-sm px-4 mb-4 z-20 rounded-md border border-blue-200 shadow-sm bg-white">
          Featured Video
        </span>
        <Video />
      </div>
    </div>
  );
};

export default ProfileHome;
