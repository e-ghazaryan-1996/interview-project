"use client";
import ThemeSwitcher from "@/components/reusable/theme-switcher";
import useScrollTop from "@/helpers/hooks/useScroll";
import { NAVBAR } from "@/helpers/utils/constant";
import { cn } from "@/helpers/utils/helpers";
import Link from "next/link";

function Header() {
  const scroll = useScrollTop(100);
  return (
    <div
      className={cn(
        "sticky top-0 z-10 transition-all duration-150 ease-linear",
        scroll ? "backdrop-blur-lg" : ""
      )}
    >
      <div className='container'>
        <div className='text-primary flex items-center justify-between py-7'>
          <h3 className='text-4xl font-bold uppercase text-purple'>Logo</h3>
          <div className='flex items-center gap-10'>
            {NAVBAR.map(({ text, to }) => {
              return (
                <Link href={to} key={text} className='text-base font-semibold'>
                  {text}
                </Link>
              );
            })}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
