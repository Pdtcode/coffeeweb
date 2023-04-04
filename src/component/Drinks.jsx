import React from 'react'
import DrinkImg from './DrinkImg'
import Link from 'next/link';

{/**Drinks Img */}
import Cappuccino from '../../public/drinks/Cappuccino.webp'
import ColdBrew from '../../public/drinks/ColdBrew.webp'
import Espresso from '../../public/drinks/Espresso.webp'
import FlatWhite from '../../public/drinks/FlatWhite.webp'
import HotChocolate from '../../public/drinks/HotChocolate.webp'
import IcedLatte from '../../public/drinks/IcedLatte.webp'

{/**Bakery Img */}
import Macarons from '../../public/pasteries/macarons.jpg'
import CheeseTarts from '../../public/pasteries/cheesetart.jpg'
import FruitTarts from '../../public/pasteries/fruittart.jpg'
import CocoTarts from '../../public/pasteries/cocotart.jpg'
import LemonTarts from '../../public/pasteries/lemontart.jpg'
import ChocoTwists from '../../public/pasteries/cocotwist.jpg'


const Drinks = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto text-center'>
      {/**Drink Tab*/}
      <div>
        <p className='text-2xl font-bold mb-10'>Drinks</p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
              <div >
              <DrinkImg socialImg={Cappuccino} drinkName='Cappuccino' message='2oz espresso + 4 oz steamed milk/alt milk. Hot, semi-frothy drink with a creamy top, milky middle, and full-bodied espresso base.' price='4.50'/>
              </div>
              <div >
              <DrinkImg socialImg={ColdBrew} drinkName='Cold Brew' message='Oh, how we love cold brew! Cold-brew can be made normally with ice and water or dressed up with milk/alt milk and your choice of one of our house-made syrups.' price='5.75'/>
              </div>
              <div >
              <DrinkImg socialImg={Espresso} drinkName='Espresso' message='Our Ethiopia Chelbessa Worka Natural & Colombia La Union blend is great classic dark espresso with notes of dark chocolate, sorghum, and dried berries.' price='3.50'/>
              </div>
              <div >
              <DrinkImg socialImg={FlatWhite} drinkName='Flat White' message='2oz espresso + 8oz of steamed milk or alt milk.' price='4.75'/>
              </div>
              <div >
              <DrinkImg socialImg={HotChocolate} drinkName='Hot Chocolate' message='A rich, velvety drinking chocolate crafted in-house and served with scratch marshmallows.' price='5.75'/>
              </div>
              <div >
              <DrinkImg socialImg={IcedLatte} drinkName='Iced Latte' message='Try any of our signature lattes iced for a refreshing twist on a coffee classic.' price='5.00'/>
              </div>
          </div>
      </div>

      {/**Pasteries Tab*/}
      <div>
        <p className='text-2xl font-bold mt-10'>Bakery</p>
        <div className=' mb-10 text-xs logo'>
          <p>baked by {<Link className=' font-extrabold text-blue-700' href='https://www.instagram.com/sugarfairybakeryokc/'>@sugarfairybakeryokc</Link>}</p> 
        </div> 
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
              <div >
              <DrinkImg socialImg={Macarons} drinkName='Macarons' message='Soft, chewy meringue cookies with a flavored filling of your choice.' price='4.50'/>
              </div>
              <div >
              <DrinkImg socialImg={CheeseTarts} drinkName='Hokkaido Cheese Tarts' message='Sweet and savory shortcrust shells filled with cheesy, creamy custard baked to perfection!' price='2.00'/>
              </div>
              <div >
              <DrinkImg socialImg={FruitTarts} drinkName='Fruit Tarts' message='Our fruit tarts are filled with a richly decadent, smooth cream and topped with glazed fruit.' price='3.50'/>
              </div>
              <div >
              <DrinkImg socialImg={CocoTarts} drinkName='Chocolate Tarts' message=' A crumbly, chocolatey tart shell filled with a rich chocolate mousse and topped with a dusting of cocoa, its sure to fulfill your chocolate cravings!' price='4.75'/>
              </div>
              <div >
              <DrinkImg socialImg={LemonTarts} drinkName='Lemon Tarts' message='Our lemon tarts are made using lemon flavored shortctrust pastry and filling it with a light and luscious lemon mousse!' price='5.75'/>
              </div>
              <div >
              <DrinkImg socialImg={ChocoTwists} drinkName='Chocolate Twists' message='Try our twists for $2.50 each. Flaky pastry with a light glaze and filled with your choice of flavor!' price='2.50'/>
              </div>
          </div>
      </div>

    </div>
    
  )
}

export default Drinks