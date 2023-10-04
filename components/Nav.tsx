import Search from "./Search";
import ProfileNavBlock from "./ProfileNavBlock";
import CommunityNavBlock from "./CommunityNavBlock";
import NavOptions from "./NavOptions";
import LogoNavBlock from "./LogoNavBlock";

const Nav = () => {
  return (
    <div className="bg-slate-50 py-6 px-12 flex justify-between items-center gap-x-12">
      <LogoNavBlock />
      <CommunityNavBlock />
      <Search />
      <NavOptions />
      <ProfileNavBlock />
    </div>
  );
};

export default Nav;
