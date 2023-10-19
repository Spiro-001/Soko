"use client";

import { getUsersByCommunityIdClient } from "@/utils/getUsersByCommunityIdClient";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";

const MembersList = ({ community }: { community: MinimalCommunityType }) => {
  const [members, setMembers] = useState<{ User: MinimalUserType }[]>([]);

  const handleOpenMembersList = async (e: MouseEvent) => {
    const membersList = document.getElementById(
      "members-list"
    ) as HTMLDialogElement;
    if (membersList.open) {
      membersList.close();
    } else {
      // setMembers(members);
      membersList.showModal();
      const members = await getUsersByCommunityIdClient(community.id);
      setMembers(members);
    }
  };

  return (
    <>
      <button onClick={handleOpenMembersList}>
        {community._count.Members} Member
        {community._count.Members > 1 ? "s" : ""}
      </button>
      <dialog id="members-list">
        <div className="flex flex-col px-4 py-3 relative bg-white gap-y-4">
          <div className="flex justify-between gap-x-6">
            <span className="text-2xl">All Members</span>
          </div>
          <div className="border border-black px-2 py-4 h-screen w-screen flex flex-wrap gap-y-2 gap-x-2 max-w-[800px] max-h-[320px] overflow-y-auto">
            {members.map((member) => (
              <Link
                href={`/user/${member.User.id}`}
                key={member.User.id}
                className="border border-black w-fit h-fit flex items-center gap-x-2 pl-1 pr-4 py-1 rounded-full bg-neutral-100"
              >
                <span className="border border-black rounded-full w-6 h-6 border-dashed">
                  <Image
                    src="/no-profile.png"
                    alt="profile"
                    width={24}
                    height={24}
                  />
                </span>
                <span>{member.User.username}</span>
              </Link>
            ))}
          </div>
          <button onClick={handleOpenMembersList} className="w-fit ml-auto">
            Close
          </button>
        </div>
      </dialog>
    </>
  );
};

export default MembersList;
