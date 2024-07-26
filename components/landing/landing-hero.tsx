import Image from "next/image";
import Link from "next/link";
import AnimateValue from "../reusable/animate-value";
import ParallaxHero from "./hero-parallax";
import HeroClothes from "./hero-clothes";

const STATISTIC = [
  {
    value: 100,
    text: "Brands",
  },
  {
    value: 200,
    text: "Fashion Designer",
  },
  {
    value: 60,
    text: "Fashion Shows",
  },
];
const BRANDS = [
  "/assets/images/adidas.png",
  "/assets/images/puma.png",
  "/assets/images/lacoste.png",
];
const LandingHero = () => {
  return (
    <div className='bg-contain bg-no-repeat'>
      <ParallaxHero />
      <div className='text-primary container relative mt-20 flex flex-col'>
        <div className='flex items-center justify-between'>
          <div className='w-full max-w-[500px] self-start'>
            <h2 className='text-[60px] font-extrabold'>
              Clothes are the Spirit of Fashion
            </h2>
            <p className='pt-4 text-xl font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
            <div className='flex gap-5 pt-[35px]'>
              <Link
                href='/login'
                className='bg-secondary rounded-lg px-5 py-3 text-xl font-semibold'
              >
                Explore Now
              </Link>
              <Link
                href='/signup'
                className='rounded-lg bg-pink px-5 py-3 text-xl font-semibold text-white'
              >
                Create
              </Link>
            </div>
            <div className='mt-20 flex h-max w-max gap-20'>
              {STATISTIC.map(({ value, text }) => {
                return (
                  <div>
                    <AnimateValue
                      key={value}
                      className='text-center text-[30px] font-bold min-[1400px]:text-[30px]'
                      start={0}
                      end={value}
                      withFormatter={true}
                      duration={1500}
                    />
                    <p className='text-xl font-medium'>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <HeroClothes />
        </div>
        <div className='m-auto flex w-full max-w-[1000px] justify-between py-[110px]'>
          {BRANDS.map((brand) => {
            return (
              <Image
                key={brand}
                src={brand}
                alt='brand'
                width={170}
                height={110}
                className='min-h-[110px] object-contain'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
