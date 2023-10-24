import UserNav from "@/components/UserNav";
import { authOptions } from "@/lib/nextAuth";
import { getUserByIdServer } from "@/utils/getUserByIdServer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";

const Profile = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session?.user) return redirect("/");
  const user = await getUserByIdServer(session.user.id);
  if (!user) return redirect("/");

  return (
    <div className="row-start-1 row-end-7 flex flex-col pt-4 pb-16 px-4 gap-4 col-start-2 col-end-3 w-full mx-auto bg-white shadow-sm rounded-md">
      <div className="h-56 w-full flex relative rounded-md mb-10">
        <Image
          src="/no-community-image.jpg"
          alt="community-picture"
          className="object-cover rounded-md"
          fill
        />
        <div className="flex absolute -bottom-11 left-6 items-end w-full box-content">
          <div className="flex relative z-10 items-center justify-center">
            <Image
              src={session.user.image ?? "/no-profile.png"}
              width={100}
              height={100}
              alt="profile"
              className="rounded-full text-lg z-20 border-4 border-green-300"
              id="profile-picture"
            />
            <div
              className="bg-white absolute rounded-full"
              style={{ height: 110, width: 110 }}
            />
          </div>
          <div className="flex gap-y-1 py-1 relative -left-8 flex-1">
            <span className="pl-12 pr-6 py-1 bg-blue-400 text-white font-semibold w-fit border-r-4 border-blue-200 shadow-sm">
              {user.username}
            </span>
            <span className="text-sm bg-sky-100 flex items-center px-6 rounded-r-md shadow-sm">
              Founder of @BASEMENT
            </span>
            <span className="ml-auto text-sm text-neutral-400 flex items-center">
              New York City, NY
            </span>
          </div>
        </div>
      </div>
      <UserNav user={user} session={session} />
      {/* <div className="flex flex-col gap-y-3 border border-black">
        {user.JoinedCommunities.map((community) => (
          <div key={community.Community.id} className="flex flex-col gap-y-1">
            <span>{community.Community.title}</span>
            <span>{community.Community.description}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Profile;
