import React, { useState, useEffect } from 'react';
import imageSlide3 from './data4';
import imageSlide4 from './data5';
import Overlay from '../assets/Overlay.png';
import Design from '../assets/Design.png';


const Together = () => {

    const[currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          if(currentSlide===2){
            setCurrentSlide(0)
          }else{
            setCurrentSlide(currentSlide+1)
          }
        },4000)
        return () => clearTimeout(timer)
      }, [currentSlide])

      const bgImageStyle = {
        backgroundImage: `url(${imageSlide3[currentSlide].url})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        transition: 'background 0.3s ease-in',
      }

      const bgImageStyle2 = {
        backgroundImage: `url(${imageSlide4[currentSlide].url})`,
        backgroundSize: 'cover',
        height: '48rem',
        width: '100vw',
        transition: 'background 0.3s ease-in',
      }

  return (
    <div className='flex text-white relative lg:h-screen h-[48rem] w-screen font-barlow flex-col'>
        <div style={bgImageStyle} className='hidden lg:flex'></div>
        <div style={bgImageStyle2} className='lg:hidden flex'></div>
        <div className='flex absolute bottom-0 z-10 w-screen'><img src={Overlay} alt='' className='w-full h-[30rem]'></img></div>
        <div className='flex absolute bottom-0 z-20 lg:-left-48 -left-52'><img src={Design} alt='' className='lg:w-[28rem] lg:h-[16rem] w-80 h-36'></img></div>
        <div className='flex flex-col absolute lg:bottom-10 bottom-4 lg:right-56 right-2 gap-2 z-20'>
          <span className='lg:text-5xl text-xl font-semibold'>Together We Create Africa:</span>
          <span className='lg:text-lg text-xs font-normal text-justify lg:w-[34rem] w-[16rem] lg:pl-3'>Igniting Change through Empowring Talks that Inspire, Educate, and Transform Lives, Building a Brighter Future for our Continent.</span>
        </div>

        {/* <div className='flex z-50 absolute lg:bottom-16 bottom-32 left-3 lg:left-8'>
            <div className='flex flex-col bg-[#ffffff]/75 lg:w-[45rem] w-[22rem] h-[15rem] lg:h-[30rem] border-none rounded-2xl justify-center'>
                <span className='lg:text-7xl text-2xl font-black text-[#0CB3A2] lg:ml-8 ml-3'>Together WEE</span>
                <span className='lg:text-7xl text-2xl font-black text-[#0CB3A2] lg:ml-8 ml-3'>Create Africa:</span>
                <span className='text-black lg:text-lg text-base font-medium lg:ml-8 ml-3 max-w-lg tracking-widest mt-4'>Igniting change through empowering talks that inspire,educate and transform lives,building a brighter future for our continent</span>
            </div>
        </div> */}
    </div>
  )
}

export default Together;