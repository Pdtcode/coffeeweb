import React from 'react'
import Link from 'next/link'

function Hero({heading, message}) {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-inherit bg-center bg-cover custom-img'>
        {/*overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 h-screen z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-6xl font-bold logo'>{heading}</h2>
            <p className='py-5 mb-6 text-xl'>{message}</p>
            <Link className='px-12 py-4 border hover:text-gray-300' href='/Shop'>Buy</Link>
        </div>
    </div>
  )
}

export default Hero