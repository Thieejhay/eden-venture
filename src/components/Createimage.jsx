import React from 'react';
import {BsPlayCircle} from 'react-icons/bs';
import Overlay from '../assets/Overlay2.png'

const Createimage = () => {


  return (
    <div className='flex w-screen items-center justify-center lg:p-5 lg:mb-12'>
        <div className='bg-cover w-full lg:h-screen h-[25rem] bg-[url("../assets/Founder.png")] hover:scale-105 hover:transition hover:ease-in hover:duration-[1.5s] rounded flex relative'>
          <span className='flex absolute lg:right-0 bottom-0'><img src={Overlay} alt='' className='lg:h-full w-screen h-36 lg:w-[80rem]'></img></span>
          <div className='flex w-full lg:justify-end lg:pt-20 lg:pr-44 z-10 pl-40 lg:pl-0 pb-6 lg:pb-0'>
            <div className='flex flex-col lg:gap-8 gap-4 justify-end  lg:justify-start'>
              <span className='uppercase lg:text-6xl text-2xl font-medium lg:font-semibold w-60 lg:w-[25rem] tracking-wider leading-snug text-white/90'>A Message from our founder</span>
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