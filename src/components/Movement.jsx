import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Movement = () => {

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
    <div className='flex flex-col bg-[#1F389F]/95 w-screen mt-4'>
        <div className='px-4 lg:px-0'>
            <div className='flex items-center justify-center w-full lg:gap-12 gap-2'>
                <div className='flex items-center lg:h-24 h-20 lg:text-4xl text-lg lg:font-bold font-medium lg:tracking-wider text-[#ffffff]'>Join the movement?</div>
                
                    {/* <span className='uppercase lg:text-lg text-base font-normal text-white'>Join the movement</span> */}
                    <form className='relative flex' ref={form} onSubmit={sendEmail}>
                        <input placeholder="email address" name='user_email' className='border-[1px] lg:h-[40px] h-[30px] w-40 lg:w-[25rem] border-box lg:px-4 lg:py-4 px-2 py-2 placeholder-gray-600'></input>
                        <button type='submit' className='lg:h-[40px] h-[30px] lg:w-12 w-6 bg-[#0CB3A2] flex items-center justify-center'>
                            <BsArrowRight className='w-8 lg:h-20 h-[30px] text-[#ffffff]'/>
                        </button>
                    </form>
                
            </div>
        </div>
        <div className='flex w-full lg:h-9 h-6 bg-[#95C93E]/95 items-center justify-center'>
        </div>
    </div>
  )
}

export default Movement;