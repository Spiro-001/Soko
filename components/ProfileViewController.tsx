import React from "react";
import ProfileHome from "./ProfileHome";
import ProfilePost from "./ProfilePost";
import ProfileMedia from "./ProfileMedia";

const ProfileViewController = ({
  type,
  user,
  session,
}: {
  type: string;
  user: UserType;
  session: Session;
}) => {
  const renderView = () => {
    switch (type) {
      case "home":
        return <ProfileHome />;
        break;
      case "post":
        return <ProfilePost posts={user.Posts} session={session} />;
        break;
      case "media":
        return <ProfileMedia />;
        break;
      default:
        break;
    }
  };
  return renderView();
};

export default ProfileViewController;
