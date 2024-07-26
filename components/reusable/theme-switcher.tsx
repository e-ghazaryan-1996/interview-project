"use client";
import { useTheme } from "@/helpers/hooks/useTheme";
import React from "react";
import DarkIcon from "@/assets/icons/dark.svg";
import LightIcon from "@/assets/icons/light.svg";
import useThemeStore from "@/store/theme-store";

function ThemeSwitcher() {
  const { handleSetTheme } = useTheme();
  const { theme } = useThemeStore();
  return (
    <div>
      <div
        className='text-primary bg-secondary flex h-max w-[79px] cursor-pointer items-center justify-end gap-[5px] rounded-3xl p-[5px] xl:mr-6'
        onClick={handleSetTheme}
      >
        <span className='flex translate-x-[20px] text-xs font-semibold transition-transform duration-300 ease-linear dark:-translate-x-0'>
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <div className='flex h-6 w-6 -translate-x-[45px] items-center justify-center rounded-full bg-pink p-[5px] transition-transform duration-300 ease-linear dark:translate-x-0'>
          {theme === "dark" ? <DarkIcon /> : <LightIcon />}
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
