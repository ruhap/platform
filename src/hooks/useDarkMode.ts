import { useMemo, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState<"dark" | "light">(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );

  const handleThemeSwitch = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  useMemo(() => {
    if (typeof window === "undefined") return;

    localStorage.theme = theme;
    const html = window.document.documentElement;

    html.classList.remove(theme === "dark" ? "dark" : "light");
    html.classList.add(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, handleThemeSwitch };
};

export default useDarkMode;
