import { useMemo, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );

  useMemo(() => {
    if (typeof window === "undefined") return;

    localStorage.theme = theme;
    const html = window.document.documentElement;

    html.classList.remove(theme === "dark" ? "dark" : "light");
    html.classList.add(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return { theme, setTheme };
};

export default useDarkMode;
