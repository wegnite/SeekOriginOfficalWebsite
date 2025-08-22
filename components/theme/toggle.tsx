"use client";

import { Moon, Sun } from "lucide-react";

import { CacheKey } from "@/services/constant";
import { cacheSet } from "@/lib/cache";
import { useAppContext } from "@/contexts/app";

export default function () {
  const { theme, setTheme } = useAppContext();

  const handleThemeChange = function (_theme: string) {
    if (_theme === theme) {
      return;
    }

    cacheSet(CacheKey.Theme, _theme, -1);
    setTheme(_theme);
  };

  return (
    <div className="flex items-center gap-x-2 px-2">
      {theme === "dark" ? (
        <Sun
          className="cursor-pointer w-5 h-5 text-muted-foreground"
          onClick={() => handleThemeChange("light")}
        />
      ) : (
        <Moon
          className="cursor-pointer w-5 h-5 text-muted-foreground"
          onClick={() => handleThemeChange("dark")}
        />
      )}
    </div>
  );
}
