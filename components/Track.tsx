import Image from "next/image";
import React from "react";

const Track = () => {
  return (
    <div className="flex flex-col gap-y-3 border border-neutral-100 px-2 py-2 rounded-md shadow-sm relative">
      <span className="absolute -top-2.5 right-2 bg-red-300 px-2 py-0.5 text-xs rounded-md font-semibold text-white">
        NEW
      </span>
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <Image
            height={100}
            width={100}
            src="https://picsum.photos/100/100"
            alt="song-image"
            className="rounded-md"
          />
          <div className="flex flex-col gap-y-1.5 flex-1">
            <div className="flex items-center gap-x-2">
              <span className="bg-black text-white px-3 py-1 rounded-md w-fit">
                Untitled-1
              </span>
              <span>by daniel</span>
              <div className="ml-auto text-xs flex gap-x-1">
                <span className="text-neutral-400 rounded-md w-fit">
                  A few minutes ago
                </span>
              </div>
            </div>
            <div className="bg-neutral-100 text-white px-3 py-1 rounded-md flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
