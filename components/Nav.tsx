import Search from "./Search";
import ProfileNavBlock from "./ProfileNavBlock";
import CommunityNavBlock from "./CommunityNavBlock";
import NavOptions from "./NavOptions";
import LogoNavBlock from "./LogoNavBlock";

const Nav = ({ session }: { session: Session | null }) => {
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
