import React from "react";
import ProfileHome from "./ProfileHome";

const ProfileViewController = ({ type }: { type: string }) => {
  const renderView = () => {
    switch (type) {
      case "home":
        return <ProfileHome />;
        break;
      case "post":
        return <div>{type}</div>;
        break;
      case "media":
        return <div>{type}</div>;
        break;
      default:
        break;
    }
  };
  return renderView();
};

export default ProfileViewController;
