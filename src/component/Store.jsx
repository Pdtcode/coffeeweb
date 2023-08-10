import React from 'react'
import CostaRica from '../../public/beans/portrait.jpg'
import Decaf from '../../public/beans/engagement.jpg'
import Ethiopia1 from '../../public/beans/wedding.jpg'
import StoreImg from './StoreImg'



const Store = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto text-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4 text-center items-center'>
            <div>
            <StoreImg socialImg={CostaRica}/>
            <p>Portrait</p>
            <p className='caveat'>800</p>
            </div>
            <div>
            <StoreImg socialImg={Decaf}/>
            <p>Engagements</p>
            <p className='caveat'>1500</p>
            </div>
            <div>
            <StoreImg socialImg={Ethiopia1}/>
            <p>Weddings</p>
            <p className='caveat'>2400</p>
            </div>
        </div>
    </div>
  )
}

export default Store