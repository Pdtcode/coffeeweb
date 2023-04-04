import Image from 'next/image';
import React from 'react';


const DrinkImg = ({ socialImg, drinkName, message, price }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <div className='text-white hidden group-hover:block'>
        <h1 className='font-bold'>{drinkName}</h1>
        <p className=' text-[.7rem] ml-2 mr-2'>{message}</p>
        <p className=' text-[.7rem] ml-2 mr-2'>{price}</p>
      </div>
      </div>
    </div>
  );
};

export default DrinkImg;