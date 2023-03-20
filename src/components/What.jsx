import React, {useState, useEffect, useRef} from 'react';
import {slider} from './data1';
import { motion, useAnimation, useInView } from 'framer-motion';



const What = () => {
  const[currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const animations = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide===1){
        setCurrentSlide(0)
      }else{
        setCurrentSlide(currentSlide+1)
      }
    },5000)
    return () => clearTimeout(timer)
  }, [currentSlide]);

  useEffect(() => {
    if(inView){
      animations.start({
          opacity: 1,
          transition: {
              ease: 'easeIn',
              duration: 0.7,
              delay: 0.1
            }
      })
  }
  if(!inView){
      animations.start({opacity: 0})
  }
})

  return (
    <div className='flex flex-col lg:gap-10 gap-5 text-white lg:h-[22rem] h-[11rem] bg-[#000000]/90 items-center justify-center py-24 px-3 lg:p-0 font-barlow'>
      <motion.div className='flex flex-col gap-4' animate={animations} ref={ref}>
        <span className='lg:text-xl text-xs font-normal lg:font-semibold text-[#E2E7E9]/80 justify-center flex lg:tracking-widest tracking-normal'>{slider[currentSlide].content1}</span>
        <span className='lg:text-xl text-xs font-normal lg:font-semibold text-[#E2E7E9]/80 justify-center flex lg:tracking-widest tracking-normal'>{slider[currentSlide].content2}</span>
      </motion.div>
      <motion.div className='flex flex-col gap-2 items-center' animate={animations}>
        <span className='border-b-4 w-10 rounded-md border-[#E2E7E9]/40'></span>
        <span className='lg:text-2xl text-lg font-light lg:font-bold tracking-widest uppercase text-[#E2E7E9]'>{slider[currentSlide].title}</span>
      </motion.div>
    </div>
  )
}

export default What;