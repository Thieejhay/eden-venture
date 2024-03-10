import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../assets/eden.png';
import Footerr from './Footerr';
import { Link } from 'react-router-dom';
import banner1 from '../assets/mnch12 copy.png';

const Register2 = () => {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ai9a35h', 'template_n2j3rfj', form.current, 'eSMX_5yNJFbgAvpAb')
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setShowPopup(true); // Show the pop-up after successful submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


  return (
    <div className='flex flex-col w-screen font-barlow'>
      <div className='flex lg:flex-row flex-col'>
        <Link to='/'>
          <div className='flex z-50 absolute lg:left-16 left-3 top-2 lg:top-6'>
            <img className='lg:w-44 w-32 h-16 lg:h-20 opacity-90' alt='' src={Logo}></img>
          </div>
        </Link>
        <span className='lg:w-[35%] w-full h-[20rem] lg:h-[30rem] bg-[#000000]'>
          <img className='w-full h-full' src={banner1} alt=''></img>
        </span>
        <div className='lg:w-[65%] flex flex-col lg:p-12 p-4 '>
          <span className='flex flex-col gap-2'>
            <span className='uppercase text-xl font-semibold'>registration</span>
            <hr className='w-full h-1 rounded bg-[#6100c1]/80'></hr>
          </span>
          <form onSubmit={sendEmail} ref={form}>
            <span className='flex lg:flex-row flex-col gap-3 lg:gap-0 lg:justify-between pt-6'>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>First Name</span>
                <input name='user_firstname' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Last Name</span>
                <input name='user_lastname' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
            </span>
            <span className='flex lg:flex-row flex-col gap-3 lg:gap-0 lg:justify-between lg:mt-6 mt-3'>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Email</span>
                <input name='user_email' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Phone No </span>
                <input name='user_no' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
            </span>
            <span className='flex lg:flex-row flex-col gap-3 lg:gap-0 lg:justify-between lg:mt-6 mt-3'>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Gender</span>
                <input name='user_gender' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Location</span>
                <input name='user_location' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
            </span>
            <span className='flex lg:flex-row flex-col gap-3 lg:gap-0 lg:justify-between lg:pb-6 lg:mt-6 mt-3'>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Job Title</span>
                <input name='user_job' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
              <span className='flex flex-col gap-1'>
                <span className=' text-base font-medium'>Instagram</span>
                <input name='user_insta' className=' lg:w-[22rem] w-full h-8 rounded px-2 border border-[#000000] outline-none'></input>
              </span>
            </span>
            <span className='flex justify-center mt-6'>
              <input className='px-6 py-2 w-fit rounded  text-[#E2E7E9] cursor-pointer hover:text-[#E2E7E9]/80 bg-[#6100c1]/80 uppercase text-xl font-semibold ' type='submit' value='register'></input>
            </span>
          </form>
        </div>
      </div>
      <div>
      </div>
      <Footerr />
      {/* Registration Successful Popup */}
      {showPopup && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Registration Successful</h2>
            <p>Your registration was successful. Thank you!</p>
            <button onClick={() => setShowPopup(false)} className='mt-4 px-4 py-2 bg-[#6100c1]/80 text-white rounded-md hover:[#6100c1]
            '>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register2;