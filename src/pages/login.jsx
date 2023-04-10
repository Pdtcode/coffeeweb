import React from 'react'
import Link from 'next/link'



function Shop() {
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='flex items-center justify-center mb-12 bg-inherit bg-center bg-cover login-bgimg h-screen'>
        <div className='absolute top-0 left-0 h-screen right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mt-[1rem]'>
            <div>
                <label className='logo text-lg'>Login</label>
            </div>
            <div>
                <input className='rounded-2xl px-3 py-2 mb-4 text-black'></input>
            </div>
            <div>
                <label className='logo text-lg'>Password</label>
            </div>
            <div>
                <input type='password' className=' rounded-2xl px-3 py-2 text-black'></input>
            </div>
            
            <div>
                <button onClick={''} className='p-3 mt-4 rounded-xl bg-amber-300/70'>Continue</button>
            </div>
            <div className='mt-4 text-sm'>
                Don't have an account? {<Link href='/' className='text-blue-400 font-semibold'>Sign up</Link>}
            </div>
          </div>

      </div>
    </div>
    </>

    
  )
}

export default Shop