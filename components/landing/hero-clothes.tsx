"use client";

import { cn, shuffle } from "@/helpers/utils/helpers";
import Image from "next/image";
import { useEffect, useState } from "react";

const CLOTHES = [
  "/assets/images/clote.png",
  "/assets/images/clote-6.png",
  "/assets/images/clote-1.png",
  "/assets/images/clote-2.png",
  "/assets/images/clote-3.png",
  "/assets/images/clote-4.png",
  "/assets/images/clote-5.png",
];
const HeroClothes = () => {
  const [clothes, setClothes] = useState(CLOTHES);

  useEffect(() => {
    const interval = setInterval(() => {
      setClothes((prevClothes) => shuffle([...prevClothes]));
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='h-[900px] w-max max-w-[600px] columns-3'>
      {clothes.map((clote, idx) => {
        return (
          <div
            key={clote}
            className={cn(
              "animate__animated mb-4 mr-2",
              idx === 6 ? "pt-12" : "",
              idx % 2 === 0 ? "animate__fadeInDown" : "animate__fadeInUp"
            )}
          >
            <Image width={187} height={220} src={clote} alt='clote' />
          </div>
        );
      })}
    </div>
  );
};

export default HeroClothes;
