"use client";

import { HomeRounded, PlayArrowRounded, ViewStream } from "@mui/icons-material";
import React, { useState } from "react";
import ProfileViewController from "./ProfileViewController";

const UserNav = ({ user, session }: { user: UserType; session: Session }) => {
  const [currentView, setCurrentView] = useState("home");

  const handleChangeView = (type: string) => {
    setCurrentView(type);
  };

  return (
    <>
      <div className="flex border-b border-neutral-300">
        <div className="flex gap-x-2 pt-2 pb-3">
          <button
            className={`flex items-center ${
              currentView === "home" ? "bg-blue-100" : "bg-none"
            } px-3 py-1 rounded-md gap-x-1`}
            onClick={(e) => handleChangeView("home")}
          >
            <HomeRounded />
            <span>Home</span>
          </button>
          <button
            className={`flex items-center ${
              currentView === "post" ? "bg-blue-100" : "bg-none"
            } px-3 py-1 rounded-md gap-x-1`}
            onClick={(e) => handleChangeView("post")}
          >
            <ViewStream />
            <span>Post</span>
          </button>
          <button
            className={`flex items-center ${
              currentView === "media" ? "bg-blue-100" : "bg-none"
            } px-3 py-1 rounded-md gap-x-1`}
            onClick={(e) => handleChangeView("media")}
          >
            <PlayArrowRounded />
            <span>Media</span>
          </button>
        </div>
      </div>

      <ProfileViewController type={currentView} user={user} session={session} />
    </>
  );
};

export default UserNav;
