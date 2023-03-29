/**Still need to connect the onSubmit effect */

import React, {useState} from 'react'



export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
    <div >
      {/*overlay*/}      
      <div className='flex items-center justify-center mb-12 bg-fixed bg-center bg-cover contact-bgimg h-screen'>
        <div className='absolute top-0 left-0 h-screen right-0 bottom-0 bg-black/70 z-[2]'/>
          <div className='p-5 text-white z-[2] mr-20'>
            <h2 className='text-5xl font-bold'>Contact</h2>
            <p className=' text-[.6rem] text-yellow-400'>*still need to connect the send button</p>
          </div>


      <div className='logo text-xl m-4 z-[3]  '>
        <form /*onSubmit={handleSubmit}*/ className="rounded-3xl shadow-xl flex flex-col px-[100px] py-[60px] bg-amber-800/40">
        <label for="fullname" className="text-gray-500 font-light dark:text-gray-50 mb-3 pr-80">Full Name<span className="text-red-500">*</span></label>
        <input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value);}} name="fullname" className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50 mb-10" />

        <label for="email" className="text-gray-50 font-light mt-4 mb-3">E-mail<span className="text-red-500">*</span></label>
        <input  type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value);}} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50" />

        <label for="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
        <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50" />

        <label for="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
        <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value); }} className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-700/40 font-light text-gray-50"></textarea>
        <div className="flex flex-row items-center justify-start">
          <button type='submit' className="px-10 mt-8 py-2 bg-amber-800/60 text-gray-50 font-light rounded-md text-lg flex flex-row items-center raleway">
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

