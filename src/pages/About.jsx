import React from 'react'

function About() {
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='flex items-center justify-center mb-12 bg-inherit bg-center bg-cover about-bgimg h-[25rem]'>
        <div className='absolute top-0 left-0 h-[25rem] right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mt-[1rem]'>
            <h2 className='text-5xl font-bold'>About</h2>
          </div>
      </div>
      {/*Founder Section*/}
      <div>
        <div className=' raleway text-lg text-left ml-5 mr-5 sm:ml-20 sm:mr-20 border border-gray-400 rounded-3xl '>
          <p className='p-2'> Welcome to Everlasting Lens! Where moments turn into cherished memories. Founded by the creative minds of Devin Ta and Peter Trinh, we are a passionate wedding photography company dedicated to capturing the most precious moments of your special day.</p>
          <p className='p-2'> With a shared vision and a deep appreciation for the beauty in love stories, Devin and Peter combined their unique talents to create Everlasting Lens. Our journey began with a simple belief: that every love story is a work of art waiting to be beautifully captured. Through our lenses, we strive to weave together the intricate threads of your unique narrative, immortalizing your emotions, laughter, and heartfelt connections.</p>
          <p className='p-2'> Devin Ta, a seasoned photographer with an eye for detail, has an innate ability to capture the raw emotions that unfold during weddings. His candid shots and keen sense of timing result in images that evoke genuine sentiments. Peter Trinh, on the other hand, brings his artistic flair and technical finesse to the table. His expertise in framing, composition, and post-production ensures that every image is a masterpiece.</p>
          <p className='p-2'> At Everlasting Lens, we understand that your wedding day is an extraordinary chapter in your life's story. We approach each wedding with a blend of professionalism and personal touch, aiming to make you feel comfortable and confident in front of the camera. Our unobtrusive presence allows us to encapsulate both the grand moments and intimate exchanges, preserving the authentic essence of your celebration.</p>
          <p className='p-2'> Our commitment to excellence extends beyond the click of a camera. From our initial consultation to the final delivery of your meticulously curated album, we pride ourselves on delivering an experience that exceeds your expectations. We collaborate closely with you to understand your preferences, ensuring that your photos are a true reflection of your love story.</p>
          <p className='p-2'> As photographers, we consider ourselves storytellers. Through our lenses, we paint pictures that transport you back to the emotions, the laughter, and the love you felt on your wedding day. With Everlasting Lens, your cherished memories become timeless treasures, ready to be relived for generations to come.</p>
          <p className='p-2'> Join us in this journey as we celebrate the beauty of love, one photograph at a time. Your story is our inspiration, and through our lens, it becomes forever etched in time, an Everlasting Lens capture.</p>

        </div>        
      </div>
    </div>
    </>

    
  )
}

export default About