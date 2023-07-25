import React from 'react';
import Logo from '../assets/new7.png';
import {Link} from 'react-router-dom';

const Createheader = () => {
  return (
    <div className='flex justify-center items-center bg-[#ffffff] border-none font-barlow w-screen'>
        <div className='flex justify-center items-center py-1'>
          <Link to='/'><img src={Logo} className='lg:w-32 w-28 h-24 lg:h-32 opacity-90' alt=''></img></Link>
        </div>
    </div>
  )
}

export default Createheader;