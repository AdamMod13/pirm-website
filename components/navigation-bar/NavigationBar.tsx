import React from 'react'
import Image from 'next/image';
import lemLogo from '../../pictures/lem_logo_white_removebg.png'

const NavigationBar = () => {
  return (
    <div className='sticky top-0 z-50 w-full grid grid-cols-5 bg-bg-100 shadow-md pl-5 pr-5 md:px-10 text-text-100 font-sans font-semibold text-lg'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          alt="pirm-logo"
          src={lemLogo}
          width={140}
        />
      </div>

      {/* Middle */}
      <div className='flex justify-center col-span-3'>
        <ul className='flex flex-wrap space-x-20'>
          <li className='flex items-center pt-1 h-20 outline-none border-transparent hover:border-primary-200 border-b-4 transition duration-200 ease-out'>
            <a href="">O nas</a>  
          </li>
          <li className='flex items-center pt-1 h-20 outline-none border-transparent hover:border-primary-200 border-b-4 transition duration-200 ease-out'>
            <a href="">Projekty</a>  
          </li>
          <li className='flex items-center pt-1 h-20 outline-none border-transparent hover:border-primary-200 border-b-4 transition duration-200 ease-out'>
            <a href="">LRP - Le Mans</a>
          </li>
          <li className='flex items-center pt-1 h-20 outline-none border-transparent hover:border-primary-200 border-b-4 transition duration-200 ease-out'>
            <a href="">Wspierają Nas</a>
          </li>
          <li className='flex items-center pt-1 h-20 outline-none border-transparent hover:border-primary-200 border-b-4 transition duration-200 ease-out'>
            <a href="">Kontakt</a>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className='flex items-center justify-end'>
        <p>PL</p>
      </div>
    </div>
  )
}

export default NavigationBar
