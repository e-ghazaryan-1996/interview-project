"use client";

import { useRef } from "react";

import useThemeStore from "@/store/theme-store";

function StoreThemeInitializer({ data }) {
  const initilized = useRef(false);
  if (!initilized.current) {
    useThemeStore.setState(data);
    initilized.current = true;
  }
  return null;
}
export default StoreThemeInitializer;
