import Image from 'next/image';
import React from 'react';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';

const StoreImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full '
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/30 group'>
      <p className='text-gray-300 hidden group-hover:block'>
      </p>
      </div>
    </div>
  );
};

export default StoreImg;