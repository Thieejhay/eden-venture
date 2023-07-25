import React from 'react';
import {BsPlayCircle} from 'react-icons/bs'

const Createimage = () => {


  return (
    <div className='flex w-screen items-center justify-center p-6 mb-12'>
        <div className='bg-cover w-full h-screen bg-[url("../assets/Founder.png")] hover:scale-105 hover:transition hover:ease-in hover:duration-[2s] rounded flex'>
          <div className='flex w-full justify-end pt-24 pr-44'>
            <div className='flex flex-col gap-16'>
              <span className='uppercase text-6xl font-semibold w-[25rem] tracking-wider leading-snug text-white'>A Message from our founder</span>
              <span className='flex gap-8'>
                <span className='uppercase text-2xl font-light text-white'>Click to watch</span>
                <span className='flex items-center'><BsPlayCircle className='w-7 h-7 text-white'/></span>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Createimage;