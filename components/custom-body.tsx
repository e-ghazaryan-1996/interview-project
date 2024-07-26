"use client";
import { cn } from "@/helpers/utils/helpers";
import useThemeStore from "@/store/theme-store";
import { Poppins } from "next/font/google";
import React, { ReactNode } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const CustomBody = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();
  return (
    <body className={cn(poppins.className, theme, "bg-primary")}>
      {children}
    </body>
  );
};

export default CustomBody;
