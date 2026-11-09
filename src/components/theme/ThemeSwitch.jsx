"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="rounded-lg p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
    >
      {resolvedTheme === "dark" ? (
        <MdOutlineWbSunny />
      ) : (
        <IoMoonOutline />
      )}
    </button>
  );
}