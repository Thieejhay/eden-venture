import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Empathy from '../assets/Empathy.png'
import Sustainability from '../assets/Sustainability.png'
import Inclusion from '../assets/Inclusion.png' 
import Innovation from '../assets/Innovation.png' 
import Authenticity from '../assets/Authenticity.png'
import Collaboration from '../assets/Collaboration.png'
import Entrepreneurial from '../assets/Entrepreneurial.png'        

const Values = () => {

  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const animations = useAnimation();
  const animationss = useAnimation();

  useEffect(() => {
    if(inView){
      animations.start({
          opacity: 1,
          transition: {
              ease: 'easeIn',
              duration: 0.9,
              delay: 0.2
            }
      })
  }
  if(!inView){
      animations.start({opacity: 0})
  }
  if(inView){
      animationss.start({
          opacity: 1,
          transition: {
              ease: 'easeIn',
              duration: 0.5,
            }
      })
  }
  if(!inView){
      animationss.start({opacity: 0})
  }
})

  return (
    <div className='flex flex-col font-barlow lg:py-20 py-16 lg:gap-8 gap-6 w-screen' ref={ref}>
        <motion.span className='text-4xl lg:text-5xl lg:font-extrabold font-medium text-[#000000]/90 flex items-center justify-center uppercase' animate={animationss}>Core values</motion.span>
        <motion.div className='flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center lg:px-12 lg:py-6 px-6' animate={animations}>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Empathy} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Empathy</span>
            </div>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Sustainability} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Sustainability</span>
            </div>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Inclusion} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Inclusion</span>
            </div>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Innovation} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Innovation</span>
            </div>
        </motion.div>
        <motion.div className='flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center lg:px-12 lg:py-6 px-6' animate={animations}>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Authenticity} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Authenticity</span>
            </div>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Collaboration} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Collaboration</span>
            </div>
            <div className='flex flex-col items-center w-48 gap-4'>
                <span><img src={Entrepreneurial} alt='' className='w-40 h-40 border-2 border-[#6100c1] rounded-3xl'/></span>
                <span className='flex justify-center text-center items-center text-lg font-normal text-[#000000]/80 lg:text-2xl lg:font-semibold'>Entrepreneurial Mindset</span>
            </div>
        </motion.div>
    </div>
  )
}

export default Values;