import { getUserByIdServer } from "@/utils/getUserByIdServer";
import { redirect } from "next/navigation";
import React from "react";

const User = async ({ params }: { params: { userId: string } }) => {
  const user = await getUserByIdServer(params.userId);
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

export default User;
