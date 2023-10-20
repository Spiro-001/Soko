import React from "react";
import CommunityModal from "@/components/CommunityModal";
import ProvidePostClient from "@/components/ProvidePostClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

const Search = async () => {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <>
      <div className="border border-black row-start-1 row-end-7 col-start-1 col-end-2 flex-col items-center pt-8 pb-16 gap-4 xl:flex hidden">
        <div className="sticky top-56"></div>
      </div>
      <div className="border border-black row-start-1 row-end-7 flex flex-col items-center pt-8 pb-16 px-4 gap-4 col-start-2 col-end-3">
        <ProvidePostClient session={session} />
      </div>
      <div className="border border-black row-start-1 row-end-7 col-start-3 col-end-4 flex-col items-center pt-8 pb-16 px-4 gap-4 xl:flex hidden">
        <div className="top-56 w-full sticky">
          <CommunityModal />
        </div>
      </div>
    </>
  );
};

export default Search;
