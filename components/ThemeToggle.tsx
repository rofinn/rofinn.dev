"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { PiMoon, PiSun } from "react-icons/pi";

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="m-8 group rounded-full hover:brightness-125 hover:scale-125"
      onClick={() => setTheme(otherTheme)}
    >
      <PiSun
        className="text-yellow light:visible transition dark:hidden"
        size="32"
      />
      <PiMoon className="hidden text-blue transition dark:block" size="32" />
      {/* <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-sky-50 [@media(prefers-color-scheme:dark)]:stroke-sky-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-sky-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-sky-600" /> */}
      {/* <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-sky-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-sky-500" /> */}
    </button>
  );
}
