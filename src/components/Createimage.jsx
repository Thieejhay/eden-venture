import React from 'react';
import {BsPlayCircle} from 'react-icons/bs';
import Overlay from '../assets/Overlay2.png'

const Createimage = () => {


  return (
    <div className='flex w-screen items-center justify-center p-6 mb-12'>
        <div className='bg-cover w-full h-screen bg-[url("../assets/Founder.png")] hover:scale-105 hover:transition hover:ease-in hover:duration-[2s] rounded flex relative'>
          <span className='flex absolute right-0'><img src={Overlay} alt='' className='h-full w-[80rem]'></img></span>
          <div className='flex w-full justify-end pt-20 pr-44 z-10'>
            <div className='flex flex-col gap-8'>
              <span className='uppercase text-6xl font-semibold w-[25rem] tracking-wider leading-snug text-white/90'>A Message from our founder</span>
              <span className='flex gap-4'>
                <a href='https://www.instagram.com/reel/CtMRqPauFho/?igshid=MzRIODBiNWFIZA==' target='_blank' rel='noreferrer'><span className='uppercase text-2xl font-light text-white'>Click to watch</span></a>
                <span className='flex items-center'><BsPlayCircle className='w-7 h-7 text-white'/></span>
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Createimage;