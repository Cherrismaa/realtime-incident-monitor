//src\components\ThemeToggle.tsx

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="px-4 py-2 rounded-md border text-sm font-medium 
                 bg-gray-100 dark:bg-gray-800 
                 text-gray-900 dark:text-gray-100 
                 border-gray-300 dark:border-gray-700 
                 hover:opacity-80 transition"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}