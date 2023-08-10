import React from 'react'
import Link from 'next/link'

function Hero({heading, message}) {
  return (
    <div className='flex items-center justify-center h-screen bg-inherit bg-center bg-cover custom-img'>
        {/*overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 h-screen z-[2]'/>
        <div className='grid justify-center text-center p-5 text-white z-[2] mt-[-4rem]'>
            <h2 className=' text-8xl font-bold logo'>{heading}</h2>
            <p className='py-2 mb-8 text-xl'>{message}</p>
            <Link href='/gallery' className=' border-[.5px] py-1 hover:bg-violet-800 hover:bg-opacity-30'>View Gallery</Link>
        </div>
    </div>
  )
}

export default Hero