import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Movement = () => {
  return (
    <div className='flex bg-[#055594] w-screen'>
        <div className='flex items-center justify-center w-full gap-6'>
            <div className='flex items-center h-24 text-3xl font-bold tracking-wider text-[#ffffff]'>Are you ready to become part of our movement?</div>
            <div className='flex items-center h-24'>
                <span className='flex'>
                    <input text='text' placeholder='Email Address' className='border-[1px] h-[40px] w-80 border-box px-4 py-4'></input>
                    <span className='h-[40px] w-12 bg-[#0CB3A2] flex items-center justify-center'>
                        <BsArrowRight className='w-8 h-20 text-[#ffffff]'/>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Movement;