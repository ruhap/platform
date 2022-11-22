import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

import useDarkMode from "@/hooks/useDarkMode";
import DarkModeSwitcher from "../DarkModeSwitcher";
import useModal from "@/hooks/useModal";
import Modal from "./Modal";
import LoginForm from "@/features/auth/LoginForm";

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
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <>
      {isOpen && (
        <Modal show={isOpen} onClose={closeModal}>
          <LoginForm />
        </Modal>
      )}
      <div className="flex w-2/12 justify-end gap-2">
        <button
          onClick={() => openModal()}
          className="relative flex rounded-full bg-slate-200 p-2"
        >
          <BiSearch />
        </button>
        <DarkModeSwitcher theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={"https://randomuser.me/api/portraits/lego/1.jpg"}
          src={"https://randomuser.me/api/portraits/lego/1.jpg"}
        />
      </div>
    </>
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
