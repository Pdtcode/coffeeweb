import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

function Footer() {
  return (
    <div >
        <div className='flex items-center justify-center'>
            <Link href='https://www.facebook.com/peter.trinh.716/'>
              <FaFacebook
              className='p-4'
              size={60}
              />        
            </Link>            

            <Link href='https://www.instagram.com/tinsngu/'>
              <FaInstagram
              className='p-4'
              size={60}
              />            
            </Link>

        </div>

        <div className='p-2'>
            <p className='text-center p-1'>© 2023 by Da Coffee.</p>
            <p className='text-center'>contact@dacoffee.com</p>
        </div>

    </div>
  )
}

export default Footer