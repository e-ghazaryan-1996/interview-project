import { FOOTER } from "@/helpers/utils/constant";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className='dark:bg-graph-pink bg-graph-gray bg-cover bg-no-repeat pb-[90px] pt-14'>
      <div className='text-primary container flex justify-between'>
        <div>
          <h3 className='text-4xl font-bold uppercase text-purple'>Logo</h3>
          <p className='max-w-[300px] pt-10 text-base font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            donec non pellentesque ut.
          </p>
        </div>
        <div className='flex w-full max-w-[778px] justify-between'>
          {FOOTER.map(({ header, items }) => {
            return (
              <div key={header}>
                <p className='mb-5 text-xl font-bold'>{header}</p>
                <div className='flex flex-col gap-5'>
                  {items.map(({ text, to }) => {
                    return (
                      <Link key={text} href={to}>
                        {text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
