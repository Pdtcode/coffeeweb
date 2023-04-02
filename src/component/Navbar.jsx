import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image'
import coffeelogo  from '../../public/coffeelogo.png'



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [logoFilter, setLogoFilter] = useState('');

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
        setLogoFilter('invert(100%)');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
        setLogoFilter('');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed logo left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center  text-white'>
        <Link href='/'>
          <Image
           src={coffeelogo}
           style={{ filter: `${logoFilter}` }}
           width= {130}
           height= {130}
           alt='logo'
          />
        </Link>

        <ul style={{color: `${textColor}`}} className='hidden sm:flex text-xl p-1 '>
          <li className='px-4  hover:text-gray-400'>
            <Link href='/'>Home</Link>
          </li>
          <li className='px-4  hover:text-gray-400'>
            <Link href='/Menu'>Menu</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/About'>About</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/Shop'>Shop</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/Blog'>Blog</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/Contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button*/}
        <div onClick={handleNav} className='block sm:hidden z-10 mr-5'>
          {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/> }
        </div>
        {/*Mobile Menu*/}
        <div className={nav 
        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
        <ul>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/' onClick={handleNav}>Home</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/Menu'  onClick={handleNav}>Menu</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/About' onClick={handleNav}>About</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/Shop' onClick={handleNav}>Shop</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/Blog' onClick={handleNav}>Blog</Link>
          </li>
          <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/Contact' onClick={handleNav}>Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar