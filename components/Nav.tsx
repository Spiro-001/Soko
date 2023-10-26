import Search from "./Search";
import ProfileNavBlock from "./ProfileNavBlock";
import CommunityNavBlock from "./CommunityNavBlock";
import NavOptions from "./NavOptions";
import LogoNavBlock from "./LogoNavBlock";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

const Nav = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <div className="bg-slate-50 py-3 px-12 z-50 flex justify-between items-center gap-x-8 shadow-sm sticky top-0">
      <LogoNavBlock />
      <CommunityNavBlock />
      <Search />
      <NavOptions />
      <ProfileNavBlock session={session} />
    </div>
  );
};

export default Nav;
