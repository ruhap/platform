import React from "react";

import TopBar from "@/ui/layout/TopBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col bg-slate-200 dark:bg-neutral-900 ">
      <TopBar />

      <div className="flex flex-1 gap-4 overflow-hidden p-4">
        <LeftSideBar />
        <div className="flex flex-1 flex-col">
          <div className="no-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto">
            {children}
          </div>
        </div>
        <RightSideBar />
      </div>

      <div className="flex">Footer</div>
    </div>
  );
};

export default Layout;
