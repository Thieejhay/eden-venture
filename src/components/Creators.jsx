import React, { useState, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
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
    <div className='flex relative bg-gray-200/20 py-12 lg:py-5 px-6 w-screen font-barlow'>
        <div className='flex w-full h-[42rem] lg:h-[27rem]'>
            <div className='flex flex-col lg:w-[30%] w-[50%] bg-[#055594] rounded-l-2xl items-center justify-center'>
                <span className='flex absolute top-4 left-0'><img src={Design2} alt='' className='w-[15rem] h-[8rem]'></img></span>
                <span className='lg:text-4xl text-lg font-black text-[#ffffff] lg:tracking-wide'>#WEECreateAfrica</span>
                <span className='lg:text-lg text-base font-medium text-[#ffffff] lg:tracking-wide lg:w-[80%] ml-3 lg:ml-0'>Women Economic Empowerment x Creators</span>
            </div>
            <div className='flex flex-col space-y-4 lg:w-[70%] w-[50%] bg-gray-400/20 rounded-r-2xl lg:px-4 px-1 justify-center gap-12'>
                <span className='flex lg:gap-3 gap-1 w-[50rem]'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-2xl font-normal text-justify text-[#000000]/70'>{createSlide[currentSlide].text}</span>
                </span>
                <span className='flex lg:gap-3 gap-1 w-[50rem]'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-2xl font-normal text-justify text-[#000000]/70'>{createSlide[currentSlide].text1}</span>
                </span>
            
            </div>
        </div>
    </div>
  )
}

export default Creators;