/**Still need to connect the onSubmit effect */

import React, {useState} from 'react'
import axios from 'axios';



export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fullname, email, subject, message };
    try {
      await axios.post('/send-email.php', data);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email', error);
    }
  };
  
  
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='items-center justify-center mb-12 bg-inherit bg-center bg-cover contact-bgimg h-screen hidden sm:flex'>
        <div className='absolute top-0 left-0 h-screen right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mr-20'>
            <h2 className='text-5xl font-bold'>Contact</h2>
          </div>

      {/*Desktop Form*/}      
      <div className='hidden sm:flex logo text-xl m-4 z-[3] '>
        <form onSubmit={handleSubmit} action="/send-email.php" method='POST' className="rounded-3xl shadow-xl flex flex-col px-[3rem] py-[3rem] bg-amber-800/40 mt-8">

        {/**Full Name */}
        <label for="fullname" className="text-gray-500 font-light dark:text-gray-50 pr-[20rem]">Full Name<span className="text-red-500">*</span></label>
        <input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value);}} name="fullname" className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-5" />

        {/**Email */}
        <label for="email" className="text-gray-50 font-light mt-5">E-mail<span className="text-red-500">*</span></label>
        <input  type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value);}} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-5" />

        {/**Subject */}
        <label for="subject" className="text-gray-500 font-light mt-5 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
        <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-5" />

        {/**Message */}
        <label for="message" className="text-gray-500 font-light mt-5 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
        <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value); }} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-5"></textarea>
        <div className="flex flex-row items-center justify-start">
          <button type='submit' className="px-10 mt-8 py-2 bg-amber-800/60 text-gray-50 font-light rounded-md text-lg flex flex-row items-center raleway">
            Send
          </button>
        </div>
        </form>  
      </div>
      </div>
    </div>
    <div >

      {/*Overlay For Mobile*/}      
      <div className='flex items-center justify-center bg-inherit bg-center bg-cover contact-bgimg h-screen sm:hidden'>
        <div className='absolute top-0 left-0 h-screen right-0 bottom-0 bg-black/60 z-[2]'/>
          <div className='z-[3] mb-[1rem] mt-[2rem]'>
            <div className=' text-white ml-[2.5rem] mr-[2.5rem]'>
              <h2 className='text-lg font-bold'>Contact</h2>
            </div>

      {/*Mobile Form*/}      
      <form /**onSubmit={handleSubmit} */ className="rounded-3xl shadow-xl sm:flex flex-col px-[1rem] py-[1rem] bg-amber-800/40 z-[3] ml-[2rem] mr-[2rem]">

        {/**Full Name */}
        <label for="fullname" className="flex text-gray-500 font-light dark:text-gray-50 pr-10">Full Name<span className="text-red-500">*</span></label>
        <input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value);}} name="fullname" className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-4" />

        {/**Email */}
        <label for="email" className="flex text-gray-50 font-light">E-mail<span className="text-red-500">*</span></label>
        <input  type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value);}} className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-4" />
        
        {/**Subject */}
        <label for="subject" className="flex text-gray-500 font-light dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
        <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} className="bg-transparent border-b py-2 pl-2 pr-1 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-4" />

        {/**Message */}
        <label for="message" className="flex text-gray-500 font-light dark:text-gray-50">Message<span className="text-red-500">*</span></label>
        <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value); }} className="bg-transparent border-b py-2 pr-8 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-2"></textarea>

        {/**Send */}
        <div className="flex flex-row items-center justify-start">
          <button type='submit' className="px-10 py-2 bg-amber-800/60 text-gray-50 font-light rounded-md text-lg flex flex-row items-center raleway">
            Send
          </button>
        </div>
        </form>                         
        </div>        
      </div>
    </div>
    
    </>

    
  )
}

