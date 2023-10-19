import { Add, Chat, Notifications } from "@mui/icons-material";
import React from "react";

const NavOptions = () => {
  return (
    <div className="flex gap-x-4 bg-white shadow-sm px-6 py-2 rounded-lg">
      <Chat />
      <Notifications />
      <Add />
    </div>
  );
};

export default NavOptions;
