import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className='text-primary container relative mt-[200px] flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center pb-[90px]'>
        <h5 className='text-[40px] font-bold'>About Us</h5>
        <p className='text-xl font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='flex justify-between gap-40'>
        <Image
          width={480}
          height={500}
          src='/assets/images/fashion.png'
          alt='fashion'
          className='max-w-[420px] object-contain'
        />
        <div className='w-full'>
          <h3 className='mb-5 text-4xl font-bold'>Fashion That Speaks</h3>
          <p className='mb-[50px] text-xl font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{" "}
          </p>
          <Link
            href='/about'
            className='rounded-lg bg-pink px-7 py-4 text-xl font-semibold text-white'
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
