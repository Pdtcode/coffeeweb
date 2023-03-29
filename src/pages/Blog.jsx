import React from 'react'
import Image from 'next/image'
import wip from '../../public/wip.png'




function Blog() {
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='flex items-center justify-center mb-12 bg-inherit bg-center bg-cover blog-bgimg h-[25rem]'>
        <div className='absolute top-0 left-0 h-[25rem] right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mt-[1rem]'>
            <h2 className='text-5xl font-bold'>Blog</h2>
          </div>
      </div>
      <div className='flex items-center justify-center text-center mb-20'>
        <Image
        src={wip}
        width={100}
        height={100}
        />
        </div>
    </div>
    </>

    
  )
}

export default Blog