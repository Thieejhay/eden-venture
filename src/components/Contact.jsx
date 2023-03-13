import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaLinkedinIn,  FaInstagram } from 'react-icons/fa';
import Logo from '../assets/new6.png';
import {Link} from 'react-router-dom';
// import Logo from '../assets/Picture 1.png'; FaLinkedinIn

const Contact = () => {

    const[toggleContact, setToggleContact] = useState();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4krpxej', 'template_46nacmd', form.current, 'RT5dVC8ztJp5z6Uej')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex flex-col gap-4 relative mt-4 bg-[#6100c1]/90'>
       <div className='flex lg:flex-row flex-col justify-center items-center lg:justify-between lg:px-24 lg:pt-8 lg:pb-6 px-6 py-6 pb-4'>
        <div className='flex flex-col gap-3'>
            <span className='flex justify-center lg:justify-start'><img src={Logo} className='w-16 h-20 opacity-90' alt=''/></span>
            <span className='flex gap-6'>
            <Link to='/profile'><span className='text-[#E2E7E9]/80 text-sm font-normal'>About Us</span></Link>
                <Link to='/profile'><span className='text-[#E2E7E9]/80 text-sm font-normal'>Programs</span></Link>
                <Link to='/profile'><span className='text-[#E2E7E9]/80 text-sm font-normal'>News</span></Link>
                <Link to='/profile'><span className='text-[#E2E7E9]/80 text-sm font-normal'>Donate</span></Link>
            </span>
            <div className='flex gap-6 justify-center lg:justify-start'>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><FaLinkedinIn className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><FaInstagram className='lg:w-4 w-3 h-3 lg:h-4 text-[#000000]/90'/></span>
            </div>
        </div>
        <div className='flex gap-2 items-center mt-3 lg:mt-0'>
            <span className='lg:text-2xl text-base font-light lg:font-normal tracking-wider flex text-[#E2E7E9]/90'>Join Our Cause </span>
            <AiOutlineArrowRight className='w-4 h-4 text-[#E2E7E9]/80'/>
            <div>
                <span className='border-none text-[#E2E7E9]/90 rounded-3xl uppercase lg:font-medium font-light text-sm lg:text-base cursor-pointer hover:bg-[#E2E7E9]/90  hover:text-[#6100c1]/90 hover:p-2' onClick = {() => {setToggleContact(true)}}>Contact us</span>
            </div>
        </div>
       </div>
       <div className='lg:text-sm text-xs font-thin text-[#E2E7E9]/80 flex justify-center'>
                © 2022 EDEN VENTURE GROUP.
        </div>

       {
            toggleContact && (
                <div className='flex bg-white z-50 lg:w-[42rem] w-screen fixed h-screen bottom-2 lg:left-[21rem] px-12 py-6 flex-col gap-4'>
                    <span onClick = {() => {setToggleContact(false)}} className='text-base cursor-pointer font-bold'>X</span>
                    <div className='flex flex-col gap-6 pt-6'>
                        <span className='font-extralight text-sm tracking-widestt text-[#22222290]'>Fill out this form we'll be in touch!</span>
                        <form className='relative' ref={form} onSubmit={sendEmail}>
                           <ul className='space-y-6'>
                            <li className='flex flex-col gap-1 w-full'>
                                <span className='font-extralight text-[#22222290] text-base'>Name</span>
                                <span className='flex gap-[3%]'>
                                    <span className='flex flex-col gap-1 w-[50%]'>
                                        <input className='border-[1px] h-[40px] border-box px-4 py-4 bg-[#f6f6f1] border-[#22222290]' text='text' name='user_fname'></input>
                                        <span className='font-extralight text-[#22222290] text-sm'>First name</span>
                                    </span>
                                    <span className='flex flex-col gap-1 w-[50%]'>
                                        <input className='border-[1px] h-[40px] border-box px-4 py-4 bg-[#f6f6f1] border-[#22222290]' text='text' name='user_lname'></input>
                                        <span className='font-extralight text-[#22222290] text-sm'>Last name</span>
                                    </span>
                                </span>
                            </li>
                            <li className='flex flex-col gap-1 w-full'>
                                <span className='font-extralight text-[#22222290] text-base'>Email</span>
                                <input className='border-[1px] h-[40px] border-box px-4 py-4 bg-[#f6f6f1] border-[#22222290]' text='email' name='user_email'></input>
                            </li>
                            <li className='flex flex-col gap-1 w-full'>
                                <span className='font-extralight text-[#22222290] text-base'>Subject</span>
                                <input className='border-[1px] h-[40px] border-box px-4 py-4 bg-[#f6f6f1] border-[#22222290]' text='text' name='subject'></input>
                            </li>
                            <li className='flex flex-col gap-1 w-full'>
                                <span className='font-extralight text-[#22222290] text-base'>Message</span>
                                <input className='border-[1px] h-[60px] border-box px-4 py-4 bg-[#f6f6f1] border-[#22222290]' text='text' name='message'></input>
                            </li>
                            <li className='flex'>
                                <span><button className='border-box px-8 py-3 text-white bg-black/80 text-sm' type='submit'>Submit</button></span>
                            </li>
                            </ul> 
                        </form>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact;