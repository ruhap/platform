import React from "react";
import { BiGroup, BiSearch } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="flex h-16 gap-4 bg-white py-4 px-8">
      <TopBarLogo />
      <Search />
      <TopBarRightMenu />
    </div>
  );
};

export const TopBarLogo = () => {
  return (
    <div className="w-2/12">
      <span className="text-center text-xl font-bold">platform</span>
    </div>
  );
};

export const TopBarRightMenu = () => {
  return (
    <div className="flex w-2/12 justify-end ">
      <div className="relative">
        <button className="relative flex rounded-full bg-slate-200 p-2">
          <BiGroup className="" />
        </button>
      </div>
    </div>
  );
};
export const Search = () => {
  return (
    <form className="flex flex-1 items-center gap-2 rounded-full bg-slate-100 p-4">
      <BiSearch />
      <input
        className="w-full bg-slate-100 text-slate-400 focus:outline-none"
        placeholder="Search"
      />
    </form>
  );
};

export default TopBar;
