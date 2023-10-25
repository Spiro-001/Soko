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
      <div className="flex">
        <div className="flex gap-x-2 py-2 px-2 bg-white rounded-md border border-neutral-200 shadow-sm">
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
