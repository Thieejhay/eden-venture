import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Human from '../assets/human.png'
import Social from '../assets/social.png'
import Equality from '../assets/equality.png' 
import Whole from '../assets/whole.png'   

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
              delay: 0.3
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
    <div className='flex flex-col font-barlow'>
        <motion.span className='text-4xl lg:font-extrabold font-medium text-[#6100c1]/90 flex justify-center mt-16 mb-8 uppercase' ref={ref} animate={animationss}>Core values</motion.span>
        <motion.div className='flex flex-col lg:flex-row lg:px-16 lg:pb-28 pb-20' animate={animations} ref={ref}>
            <div className='flex flex-col basis-1/4 items-center'>
                <span><img src={Human} alt='' className='w-40 h-40'/></span>
                <span className='flex justify-center text-lg font-normal text-[#000000]/80'>Respect for human dignity</span>
            </div>
            <div className='flex flex-col basis-1/4 items-center'>
                <span><img src={Social} alt='' className='w-40 h-40'/></span>
                <span className='flex justify-center text-lg font-normal text-[#000000]/80'>Social Justice</span>
            </div>
            <div className='flex flex-col basis-1/4 items-center'>
                <span><img src={Equality} alt='' className='w-40 h-40'/></span>
                <span className='flex justify-center text-lg font-normal text-[#000000]/80'>Equality and Equity</span>
            </div>
            <div className='flex flex-col basis-1/4 items-center'>
                <span><img src={Whole} alt='' className='w-40 h-40'/></span>
                <span className='flex justify-center text-lg font-normal text-[#000000]/80'>Wholeness and Inclusiveness</span>
            </div>
        </motion.div>
    </div>
  )
}

export default Values;