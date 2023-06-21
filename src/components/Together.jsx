import React, { useState, useEffect } from 'react';
import imageSlide3 from './data4';

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

  return (
    <div className='flex text-white relative h-screen w-screen font-barlow flex-col'>
        <div style={bgImageStyle} className='hidden lg:flex'></div>
        <div className='flex z-50 absolute bottom-16 left-8'>
            <div className='flex flex-col bg-[#ffffff]/75 w-[45rem] h-[30rem] border-none rounded-2xl justify-center'>
                <span className='text-7xl font-black text-[#0CB3A2] ml-8'>Together we</span>
                <span className='text-7xl font-black text-[#0CB3A2] ml-8'>Create Africa:</span>
                <span className='text-black text-lg font-medium ml-8 max-w-lg tracking-widest mt-4'>Igniting change through empowering talks that inspire,educate and transform lives,building a brighter future for our continent</span>
            </div>
        </div>
    </div>
  )
}

export default Together;