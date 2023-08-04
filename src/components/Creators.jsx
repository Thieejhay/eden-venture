import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowRight} from 'react-icons/md';
import Design2 from '../assets/Design2.png'
import createSlide from './data6';

const Creators = () => {

    const[currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          if(currentSlide===1){
            setCurrentSlide(0)
          }else{
            setCurrentSlide(currentSlide+1)
          }
        },7000)
        return () => clearTimeout(timer)
      }, [currentSlide])

  return (
    <div className='flex flex-col relative bg-gray-200/20 w-screen font-barlow'>
        <div className='py-6 lg:py-5 px-3 lg:px-5'>
          <div className='flex w-full h-[37rem] lg:h-[27rem]'>
            <div className='flex flex-col lg:w-[30%] w-[45%] bg-[#1F389F]/95 rounded-l-2xl lg:px-8 px-3 justify-center'>
                <span className='flex absolute top-4 lg:left-0 -left-4'><img src={Design2} alt='' className='lg:w-[15rem] lg:h-[8rem] w-36 h-36'></img></span>
                <span className='lg:text-4xl text-lg font-black text-[#ffffff] lg:tracking-wide'>#WEECreateAfrica</span>
                <span className='lg:text-lg text-base font-medium text-[#ffffff] lg:tracking-wide'>Women Economic Empowerment x Creators</span>
            </div>
            <div className='flex flex-col space-y-4 lg:w-[70%] w-[55%] bg-gray-400/20 rounded-r-2xl lg:px-4 px-1 justify-center lg:gap-12 gap-6'>
                <span className='flex lg:gap-5 gap-1 lg:w-[50rem] w-full lg:px-0 px-2'>
                    <span className='lg:flex hidden mt-2'><MdOutlineKeyboardArrowRight className='text-[#95C93E] w-6 h-6 p-1 rounded-full border-2 border-[#95C93E]'/></span>
                    <span className='lg:text-2xl text-lg font-normal lg:font-semibold lg:text-justify text-clip text-[#000000]/70'>{createSlide[currentSlide].text}</span>
                </span>
                <span className='flex lg:gap-5 gap-1 lg:w-[50rem] w-full lg:px-0 px-2'>
                    <span className='lg:flex hidden mt-2'><MdOutlineKeyboardArrowRight className='text-[#95C93E] w-6 h-6 p-1 rounded-full border-2 border-[#95C93E]'/></span>
                    <span className='lg:text-2xl text-lg font-normal lg:font-semibold lg:text-justify text-[#000000]/70'>{createSlide[currentSlide].text1}</span>
                </span>
            
            </div>
          </div>
        </div>
        <div className='flex w-screen h-9 bg-[#95C93E]/95 items-center justify-center'>
        </div>
    </div>
  )
}

export default Creators;