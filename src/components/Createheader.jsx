import React from 'react';
import Logo from '../assets/new7.png';

const Createheader = () => {
  return (
    <div className='flex justify-center items-center bg-[#ffffff] border-none font-barlow w-screen lg:py-4'>
        <div className='flex justify-center items-center'>
            <img src={Logo} className='lg:w-36 w-28 h-24 lg:h-32 opacity-90' alt=''></img>
        </div>
    </div>
  )
}

export default Createheader