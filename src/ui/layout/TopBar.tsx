import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

import useDarkMode from "@/hooks/useDarkMode";
import DarkModeSwitcher from "../DarkModeSwitcher";

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
  const { theme, handleThemeSwitch } = useDarkMode();
  return (
    <div className="flex w-2/12 justify-end gap-2">
      <DarkModeSwitcher theme={theme} handleThemeSwitch={handleThemeSwitch} />

      <Image
        className="rounded-full"
        width={32}
        height={32}
        alt={"https://randomuser.me/api/portraits/lego/1.jpg"}
        src={"https://randomuser.me/api/portraits/lego/1.jpg"}
      />
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
