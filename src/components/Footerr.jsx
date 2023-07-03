import React from 'react';
import Logo from '../assets/new6.png';
import { FaLinkedinIn,  FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footerr = () => {
  return (
    <div className='flex justify-between w-screen h-[20rem] pt-20 px-20 bg-[#6100c1]/90 font-barlow'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-center'>
                <img src={Logo} className='w-20 h-20 opacity-90' alt=''></img>
            </div>
            <div className='flex gap-3 justify-center'>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.linkedin.com/company/evgnigeria/?viewAsMember=true' rel='noreferrer'><FaLinkedinIn className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https//:www.instagram.com/edenventuregroup/?hl=en' rel='noreferrer'><FaInstagram className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://twitter.com/weecreateafrica?s=21&t=DspMjJG2ePwZzOqrDbEHUw' rel='noreferrer'><FaTwitter className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.youtube.com/@weecreateafrica?sub_confirmation=1' rel='noreferrer'><FaYoutube className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></a></span>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <span className='text-[#ffffff] text-xl font-medium'>
                Our Company
            </span>
            <span className='flex flex-col gap-3'>
                <Link to='/profile'><span className='text-[#ffffff] text-base font-extralight'>About Us</span></Link>
                <Link to='/wecreate'><span className='text-[#ffffff] text-base font-extralight'>WEEcreate</span></Link>
                <Link to='/profile'><span className='text-[#ffffff] text-base font-extralight'>News</span></Link>
                <Link to='/profile'><span className='text-[#ffffff] text-base font-extralight'>Donate</span></Link>
            </span>
        </div>
        <div className='flex flex-col gap-5'>
            <span className='text-[#ffffff] text-xl font-medium'>
                Our Services
            </span>
            <span className='flex flex-col gap-3'>
                <Link to='/profile'><span className='text-[#ffffff] text-base font-extralight'>About Us</span></Link>
                <Link to='/wecreate'><span className='text-[#ffffff] text-base font-extralight'>WEEcreate</span></Link>
            </span>
        </div>
        <div className='flex flex-col gap-5'>
            <span className='text-[#ffffff] text-xl font-medium'>
                Get In Touch
            </span>
            <span className='flex flex-col gap-3'>
                <span className='text-[#ffffff] text-base font-extralight'>Address</span>
                <span className='text-[#ffffff] text-base font-extralight'>Email</span>
            </span>
        </div>
    </div>
  )
}

export default Footerr;