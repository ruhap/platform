import { useMemo, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useMemo(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
    const html = window.document.documentElement;

    if (theme === "dark") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
  }, [theme]);

  return { theme, setTheme };
};

export default useDarkMode;
