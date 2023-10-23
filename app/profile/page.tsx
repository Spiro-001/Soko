import { authOptions } from "@/lib/nextAuth";
import { getUserByIdServer } from "@/utils/getUserByIdServer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) return redirect("/");
  const user = await getUserByIdServer((session as Session).user.id);
  if (!user) return redirect("/");

  return (
    <div className="border border-black row-start-1 row-end-7 flex flex-col pt-8 pb-16 px-4 gap-4 col-start-2 col-end-3 w-full mx-auto">
      <span>{user.username}</span>
      <div className="flex flex-col gap-y-3">
        {user.JoinedCommunities.map((community) => (
          <div key={community.Community.id} className="flex flex-col gap-y-1">
            <span>{community.Community.title}</span>
            <span>{community.Community.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
