import {
  FavoriteBorderRounded,
  Lyrics,
  ModeCommentOutlined,
  Send,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const Track = () => {
  return (
    <div className="flex flex-col gap-y-3 border border-neutral-200 px-2 py-2 rounded-md shadow-sm relative">
      <div className="absolute -top-3.5 right-3 bg-white px-2">
        <span className=" bg-red-300 px-2 py-0.5 text-xs rounded-md font-semibold text-white">
          NEW
        </span>
      </div>
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
              <span className="bg-black text-white px-3 py-1 rounded-sm w-fit text-sm font-semibold">
                Untitled-1
              </span>
              <span className="text-xs">by daniel</span>
              <div className="ml-auto flex gap-x-1">
                <span className="text-neutral-400 rounded-sm w-fit text-xs">
                  A few minutes ago
                </span>
              </div>
            </div>
            <div className="bg-neutral-100 text-white px-3 py-1 rounded-sm flex-1 h-full"></div>
            <div className="flex gap-x-1 text-sm">
              <button className="pl-1 pr-2 py-0.5 border border-neutral-200 rounded-sm flex items-center gap-x-0.5">
                <FavoriteBorderRounded
                  sx={{ height: 18, color: "rgb(105 105 105)" }}
                />
                <span>Like</span>
              </button>
              <button className="pl-1 pr-2 py-0.5 border border-neutral-200 rounded-sm flex items-center gap-x-0.5">
                <ModeCommentOutlined
                  sx={{ height: 18, color: "rgb(105 105 105)" }}
                />
                <span>Comment</span>
              </button>
              <button className="pl-1 pr-2 py-0.5 border border-neutral-200 rounded-sm flex items-center gap-x-0.5">
                <Send sx={{ height: 18, color: "rgb(105 105 105)" }} />
                <span>Share</span>
              </button>
              <button className="pl-1 pr-2 py-0.5 border border-neutral-200 rounded-sm flex items-center gap-x-0.5">
                <Lyrics sx={{ height: 18, color: "rgb(105 105 105)" }} />
                <span>Lyrics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
