import Drinks from '@/component/Drinks'
import React from 'react'



function Menu() {
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='flex items-center justify-center mb-12 bg-inherit bg-center bg-cover menu-bgimg h-[25rem]'>
        <div className='absolute top-0 left-0 h-[25rem] right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mt-[1rem]'>
            <h2 className='text-5xl font-bold'>Menu</h2>
          </div>
      </div>
      {/*Menu*/}
      <Drinks/>
    </div>
    </>

    
  )
}

export default Menu