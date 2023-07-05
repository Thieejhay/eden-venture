import React from 'react';
import Wee from '../assets/WEE2.gif';
const Createvideo = () => {

  return (
    <div className='flex flex-col gap-8'>
        <div className='flex justify-center items-center lg:px-0 px-6 pt-4 lg:pt-0'>
          <a href='https://www.instagram.com/reel/CtMRqPauFho/?igshid=Y2I2MzMwZWM3ZA==' rel='noreferrer'><img  src={Wee} alt='' className='lg:w-[52rem] h-[16rem]  lg:h-[30rem] box-border rounded-2xl flex'/></a>
        </div>
        <div className='flex bg-[#055594] w-screen'>
            <div className='flex items-center justify-center w-full'>
                <div className='flex items-center h-20 lg:text-3xl text-xl lg:font-bold font-medium lg:tracking-wider text-[#ffffff] uppercase'>
                    WCA community around the world
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createvideo;