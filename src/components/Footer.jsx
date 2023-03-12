import React from 'react';
import Logo from '../assets/new6.png';
import { FaLinkedinIn,  FaInstagram } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:p-20 py-12 px-8 bg-[#6100c1]/90'>
            <div className='flex flex-col gap-4 basis-2/5'>
                <span><img src={Logo} className='w-16 h-20 opacity-90' alt=''/></span>
                <span className='text-[#E2E7E9]/90 text-base font-normal w-4/5'></span>
                <span className='flex gap-4'>
                    <a href='https://www.linkedin.com/company/evgnigeria/?viewAsMember=true' rel='noreferrer'><span><FaLinkedinIn className='lg:w-6 w-6 h-6 lg:h-6 text-[#E2E7E9]/90'/></span></a>
                    <a href='https//:www.instagram.com/edenventuregroup/?hl=en' rel='noreferrer'><span><FaInstagram className='lg:w-6 w-6 h-6 lg:h-6 text-[#E2E7E9]/90'/></span></a>
                </span>
            </div>
            <div className='flex flex-col basis-[30%] gap-6'>
                <span className='text-[#E2E7E9] text-lg font-semibold lg:mb-4'>Our Services</span>
                <Link to='/profile'><span className='text-[#E2E7E9]/80 text-sm font-normal'>About Us</span></Link>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>Programs</span>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>News</span>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>Donate</span>
            </div>
            <div className='flex flex-col basis-[30%] gap-6'>
                <span className='text-[#E2E7E9] text-lg font-semibold lg:mb-4'>Get in touch</span>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>Adress</span>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>hello@edenventuregroup.com</span>
                <span className='text-[#E2E7E9]/80 text-sm font-normal'>+234 (0) 909 328 9845</span>
            </div>
    </div>
  )
}

export default Footer;