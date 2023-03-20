import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
// import Heroo from '../assets/eden.png'
import imageSlide from './data2';
import imageSlide2 from './data3';
import Header from './Header';
// import from 'react'; useScroll, useTransform 



const Hero = () => {

  const[currentSlide, setCurrentSlide] = useState(0);
  const[active, setActive] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide===4){
        setCurrentSlide(0)
      }else{
        setCurrentSlide(currentSlide+1)
      }
    },4000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentSlide].url})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    transition: 'background 0.3s ease-in',
  }
  const bgImageStyle2 = {
    backgroundImage: `url(${imageSlide2[currentSlide].url})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    transition: 'background 0.3s ease-in',
  }
  const goToNext = (currentSlide)=>{
    setCurrentSlide(currentSlide)
  }
  const activate = (currentSlide) => {
    setActive(currentSlide)
  }


  return (
    <motion.div className="flex text-white relative h-screen w-screen font-barlow flex-col">
      <div style={bgImageStyle} className='hidden lg:flex'></div>
      <div style={bgImageStyle2} className='lg:hidden flex'></div>
      <div className='flex z-50 absolute'><Header /></div>
      <div className='flex z-50 absolute top-[45%] left-[50%] -translate-x-2/4 -translate-y-2/4'>
        <img src={imageSlide[currentSlide].url2} alt='' className='lg:w-[26rem] lg:h-52 w-[22rem] h-32'/>
      </div>
      {/* <span className='lg:text-7xl text-3xl lg:w-[60rem] w-screen px-3 font-semibold flex z-10 absolute lg:top-[75%] top-[70%] lg:left-[55%] left-[53%] -translate-x-2/4 -translate-y-2/4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>{imageSlide[currentSlide].title}</span> */}
      <span className='lg:text-7xl text-3xl w-screen px-3 font-semibold flex items-center justify-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] -mt-72 lg:-mt-[13rem]'>{imageSlide[currentSlide].title}</span>
      <span className='flex lg:z-50 z-10 absolute top-[85%] left-[50%] -translate-x-2/4 -translate-y-2/4'>
        {
          imageSlide.map((imageSlide, currentSlide)=>(
            <span key={currentSlide} onClick={event =>{goToNext(currentSlide); activate(currentSlide);}} className={`w-3 h-3 bg-[#6100c1] ml-3 cursor-pointer ${active === currentSlide && "bg-white"}`}></span>
          ))
        }
      </span>
    </motion.div>
  )
}

export default Hero;




