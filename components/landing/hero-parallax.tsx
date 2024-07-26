"use client";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

const ParallaxHero = () => {
  return (
    <>
      <div className='hidden dark:block'>
        <SimpleParallax>
          <Image
            src='/assets/graph/graph-pink.svg'
            width={1400}
            height={1400}
            alt='graph'
            className='absolute top-[400px] w-[83%]'
          />
        </SimpleParallax>
      </div>
      <div className='block dark:hidden'>
        <SimpleParallax>
          <Image
            src='/assets/graph/graph-gray.svg'
            width={1400}
            height={1400}
            alt='graph'
            className='absolute top-[400px] w-[83%]'
          />
        </SimpleParallax>
      </div>
    </>
  );
};

export default ParallaxHero;
