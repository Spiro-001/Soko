import React from "react";
import ProfileHome from "./ProfileHome";
import ProfilePost from "./ProfilePost";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

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
        return <div>{type}</div>;
        break;
      default:
        break;
    }
  };
  return renderView();
};

export default ProfileViewController;
