import UserNav from "@/components/UserNav";
import { authOptions } from "@/lib/nextAuth";
import { getUserByIdServer } from "@/utils/getUserByIdServer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import Banner from "@/components/Banner";
import { getSPhotoFromS3 } from "@/aws/s3_aws";
import ProfilePicture from "@/components/ProfilePicture";

const Profile = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  const user = await getUserByIdServer(session.user.id);
  if (!user) return redirect("/");

  const backgroundImage = session.user.Profile.backgroundImage;
  const backgroundColor = session.user.Profile.backgroundColor;
  const backgroundProfileColor = session.user.Profile.profileContainerColor;
  const backgroundProfile = session.user.Profile.profileContainerImage;
  const banner = await getSPhotoFromS3(`${session.user.Profile.id}-banner`);
  let profile = await getSPhotoFromS3(`${session.user.id}-profile`);

  if (profile === "UnknownError") profile = "/no-profile.png";

  return (
    <div
      className="row-start-1 row-end-7 col-start-1 col-end-4 w-full mx-auto flex-1 grid grid-flow-row grid-rows-6 grid-cols-[minmax(0,_1fr)_minmax(min-content,_2fr)_minmax(0,_1fr)] px-8 py-4"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="flex flex-col pt-4 pb-16 px-4 gap-4 bg-white shadow-md rounded-md row-start-1 row-end-7 xl:col-start-2 xl:col-end-3 col-start-1 col-end-4"
        style={{
          backgroundImage: `url("${backgroundProfile}")`,
          backgroundColor: backgroundProfileColor,
        }}
      >
        <div className="h-56 w-full flex relative rounded-md mb-10">
          <Banner banner={banner} profile={session.user.Profile} />
          <div className="flex absolute -bottom-10 left-6 items-end w-full box-content">
            <div className="flex relative z-10 items-center justify-center">
              <ProfilePicture session={session} profile={profile} />
              {/* <div
                className="bg-white absolute rounded-full"
                style={{
                  height: 108,
                  width: 108,
                  backgroundImage: `url("${backgroundProfile}")`,
                }}
              /> */}
            </div>
            <div className="flex relative flex-1 -left-8 items-center gap-x-2">
              <div className="flex gap-y-1 py-2 flex-1 items-end text-xs md:text-sm">
                <span className="pl-12 pr-6 py-1 bg-blue-400 text-white font-semibold w-fit border-r-4 border-blue-200 shadow-sm whitespace-nowrap">
                  {user.username}
                </span>
                <span className="bg-sky-100 flex items-center px-4 rounded-r-md whitespace-nowrap shadow-sm py-1 font-semibold">
                  {session.user.Profile.headline}
                </span>
              </div>
              <span className="ml-auto text-neutral-400 md:flex items-center bg-white border border-neutral-200 px-3 rounded-md shadow-sm py-1 whitespace-nowrap hidden">
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
    </div>
  );
};

export default Profile;
