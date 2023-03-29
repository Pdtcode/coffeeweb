import React from 'react'
import CostaRica from '../../public/beans/CostaRica.png'
import Decaf from '../../public/beans/Decaf.png'
import Ethiopia1 from '../../public/beans/Ethiopia1.png'
import Ethiopia2 from '../../public/beans/Ethiopia2.png'
import Guatemala from '../../public/beans/Guatemala.png'
import StoreImg from './StoreImg'



const Store = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto text-center'>
        <p className='text-2xl font-bold'>Beans</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <div>
            <StoreImg socialImg={CostaRica}/>
            <p>Costa Rica</p>
            </div>
            <div>
            <StoreImg socialImg={Decaf}/>
            <p>Cold Brew</p>
            </div>
            <div>
            <StoreImg socialImg={Ethiopia1}/>
            <p>Espresso</p>
            </div>
            <div>
            <StoreImg socialImg={Ethiopia2}/>
            <p>Flat White</p>
            </div>
            <div>
            <StoreImg socialImg={Guatemala}/>
            <p>Hot Chocolate</p>
            </div>
        </div>
    </div>
  )
}

export default Store