import React from 'react';
import Logo from '../assets/new7.png';
import { FaLinkedinIn,  FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-between bg-[#055594] w-screen lg:h-[20rem] lg:pt-20 lg:px-20 px-2 py-8'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-center'>
                <img src={Logo} className='lg:w-20 w-16 h-16 lg:h-20 opacity-90' alt=''></img>
            </div>
            <div className='flex lg:gap-3 gap-1 justify-center'>
                <span className='p-1 bg-[#0CB3A2]/80 rounded-md'><a href='https://www.linkedin.com/company/evgnigeria/?viewAsMember=true' rel='noreferrer'><FaLinkedinIn className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#0CB3A2]/80 rounded-md'><a href='https//:www.instagram.com/edenventuregroup/?hl=en' rel='noreferrer'><FaInstagram className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#0CB3A2]/80 rounded-md'><a href='https://twitter.com/weecreateafrica?s=21&t=DspMjJG2ePwZzOqrDbEHUw' rel='noreferrer'><FaTwitter className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#0CB3A2]/80 rounded-md'><a href='https://www.youtube.com/@weecreateafrica?sub_confirmation=1' rel='noreferrer'><FaYoutube className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
            </div>
        </div>
        <div className='flex flex-col lg:gap-5 gap-3'>
            <span className='text-[#ffffff] lg:text-xl lg:font-medium text-sm'>
                Our Company
            </span>
            <span className='flex flex-col gap-3'>
                <Link to='/profile'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>About Us</span></Link>
                <Link to='/wecreate'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>WEEcreate</span></   Link>
                <Link to='/profile'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>News</span></Link>
                <Link to='/profile'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>Donate</span></Link>
            </span>
        </div>
        <div className='flex flex-col lg:gap-5 gap-3'>
            <span className='text-[#ffffff] lg:text-xl lg:font-medium text-sm'>
                Our Services
            </span>
            <span className='flex flex-col gap-3'>
            <Link to='/profile'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>About Us</span></Link>
                <Link to='/wecreate'><span className='text-[#ffffff] lg:text-base text-xs font-extralight'>WEEcreate</span></Link>
            </span>
        </div>
        <div className='flex flex-col lg:gap-5 gap-3'>
            <span className='text-[#ffffff] lg:text-xl lg:font-medium text-sm'>
                Get In Touch
            </span>
            <span className='flex flex-col gap-3'>
                <span className='text-[#ffffff] lg:text-base text-xs font-extralight'>Address</span>
                <span className='text-[#ffffff] lg:text-base text-xs font-extralight'>Email</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;