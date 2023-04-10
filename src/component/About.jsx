import React from 'react'
import Image from 'next/image'
import founder1 from '../../public/founder1.jpg'
import founder2 from '../../public/founder2.jpg'

function About() {
  return (
    <div >
    {/*overlay*/}      
    <div className=' items-center justify-center bg-inherit bg-center about-bgimg bg-cover h-[20rem] mb-5'>
      
        <div className=' absolute ml-5 p-32 text-white z-[3] mt-[1rem]'>
          <h2 className='text-5xl font-bold'>About</h2>
        </div>
        <div className=' top-0 left-0 h-[20rem] right-0 bg-black/50 bottom-0 z-[2]'/>
    </div>
    {/*Founder Section*/}
    <div>
      <h1 className=' text-center logo text-2xl font-bold'>
        Meet the Founders
      </h1>
      <div className='item-center justify-center flex p-2 '>
      <Image 
      src={founder1}
      height={400}
      width={200}
      className='p-4 rounded-[50px]'
      /> 
      <Image 
      src={founder2}
      height={400}
      width={210}
      className='p-4 rounded-[50px]'
      />
      </div>
      <div className=' raleway text-lg text-left ml-5 mr-5 sm:ml-20 sm:mr-20 border border-gray-400 rounded-3xl '>
        <p className='p-2'>
        At Đá Coffee Truck, we're passionate about delivering the perfect cup of coffee every time. Our story began with three friends who shared a love for coffee and a dream of creating a coffee experience like no other. Let us introduce you to our founders:
        </p>
        <p className='p-2'>
        Peter Trinh: Peter is the visionary behind Đá Coffee Truck. With a background in business and a love for coffee culture, he saw an opportunity to create a unique coffee brand that would inspire and delight customers. Peter oversees the business operations of Đá Coffee and is constantly seeking out new ways to improve our products and services.
        </p>
        <p className='p-2'>
        Tin Nguyen: Tin is the heart of Đá Coffee Truck. He brings a deep understanding of coffee sourcing and roasting to our team, having worked in the coffee industry for over a decade. Tin is passionate about creating unique and flavorful coffee blends that are sure to please even the most discerning coffee lovers.
        </p>
        <p className='p-2'>
        Khiem Ngo: Khiem is the creative force behind Đá Coffee Truck. With a background in design and a love for all things coffee, he brings a unique perspective to our branding and marketing efforts. Khiem is responsible for creating the beautiful and engaging visual content that helps to showcase our products and tell our story.
        </p>
        <p className='p-2'>
        Together, Peter, Tin, and Khiem have created a coffee brand that is known for its quality, innovation, and passion. We hope that you'll join us on this journey as we continue to explore new frontiers in the world of coffee.
        </p>
      </div>        
    </div>

    {/**Why We Do What We Do? */}
    
    <div>
      <h1 className=' text-center logo text-2xl font-bold mt-10'>
        Why We Do What We Do?
      </h1>
      <div className='item-center justify-center flex p-2 '>
      </div>
      <div className=' raleway text-lg text-left ml-5 mr-5 sm:ml-20 sm:mr-20 border border-gray-400 rounded-3xl '>
        <p className='p-2'>
        At Đá Coffee Truck, we believe that coffee is more than just a drink - it's an experience. That's why we're dedicated to crafting the perfect cup of coffee every time, using only the highest quality beans and the most innovative brewing techniques. But why do we do it?
        </p>
        <p className='p-2'>
        For Peter, Tin, and Khiem, coffee has always been a passion. They each bring a unique perspective to the world of coffee, whether it's Peter's business acumen, Tin's roasting expertise, or Khiem's creative vision. But what truly drives us is the desire to share our passion with the world.
        </p>
        <p className='p-2'>
        We believe that coffee has the power to bring people together, to spark conversation and connection, and to create moments of joy and inspiration. We want to be a part of that experience, to help people discover the true potential of coffee and to explore all of the amazing flavors and nuances that it has to offer.
        </p>
        <p className='p-2'>
        That's why we've dedicated ourselves to creating a coffee brand that is known for its quality, innovation, and passion. We believe that every cup of coffee should be an adventure, a journey of discovery that brings you closer to the people and the world around you.
        </p>
        <p className='p-2'>
        So why do we do it? Because we love coffee, and we want to share that love with you. We hope that every cup of Đá Coffee Truck brings a smile to your face and a sense of joy to your day.
        </p>
      </div>
      
    </div>

  </div>
  )
}

export default About