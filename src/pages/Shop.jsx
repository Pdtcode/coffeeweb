import React from 'react'

function Shop() {
  return (
<div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover shop-bgimg'>
        {/*overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/70 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>Shop</h2>

        </div>
    </div>
  )
}

export default Shop