import React from 'react'
import Cappuccino from '../../public/drinks/Cappuccino.webp'
import ColdBrew from '../../public/drinks/ColdBrew.webp'
import Espresso from '../../public/drinks/Espresso.webp'
import FlatWhite from '../../public/drinks/FlatWhite.webp'
import HotChocolate from '../../public/drinks/HotChocolate.webp'
import IcedLatte from '../../public/drinks/IcedLatte.webp'
import DrinkImg from './DrinkImg'



const Drinks = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto text-center'>
        <p className='text-2xl font-bold'>Drinks</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <div>
            <DrinkImg socialImg={Cappuccino}/>
            <p>Cappuccino</p>
            </div>
            <div>
            <DrinkImg socialImg={ColdBrew}/>
            <p>Cold Brew</p>
            </div>
            <div>
            <DrinkImg socialImg={Espresso}/>
            <p>Espresso</p>
            </div>
            <div>
            <DrinkImg socialImg={FlatWhite}/>
            <p>Flat White</p>
            </div>
            <div>
            <DrinkImg socialImg={HotChocolate}/>
            <p>Hot Chocolate</p>
            </div>
            <div>
            <DrinkImg socialImg={IcedLatte}/>
            <p>Iced Latte</p>
            </div>
        </div>
    </div>
    
  )
}

export default Drinks