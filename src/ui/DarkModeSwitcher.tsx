import React from "react";
import { BsCloudMoonFill, BsCloudMoon } from "react-icons/bs";

type DarkModeSwitcherProps = {
  theme: "light" | "dark";
  handleThemeSwitch: (theme: "light" | "dark") => void;
};

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = ({
  theme,
  handleThemeSwitch,
}) => {
  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => handleThemeSwitch("light")}
          className="relative flex rounded-full bg-slate-200 p-2"
        >
          <BsCloudMoonFill className="" />
        </button>
      ) : (
        <button
          onClick={() => handleThemeSwitch("dark")}
          className="relative flex rounded-full bg-slate-200 p-2"
        >
          <BsCloudMoon className="" />
        </button>
      )}
    </div>
  );
};

export default DarkModeSwitcher;
