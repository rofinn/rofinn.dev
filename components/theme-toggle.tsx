"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  // Hack around hydration issues
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  // useEffect only runs on the client, so now we can safely show the UI
  return (
    <div
      onClick={() =>
        currentTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      className="block text-xl"
    >
      {currentTheme === "light" ? (
        <FaMoon size="1.5rem" />
      ) : (
        <FaSun size="1.5rem" />
      )}
    </div>
  );
}
