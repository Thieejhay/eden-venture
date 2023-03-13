import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BiNetworkChart, BiVideoRecording, BiHealth } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';


const Solution = () => {

  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const animations = useAnimation();

  useEffect(() => {
    if(inView){
      animations.start({
          opacity: 1,
          transition: {
              ease: 'easeIn',
              duration: 0.8,
            }
      })
  }
  if(!inView){
      animations.start({opacity: 0})
  }
})

  return (
    <div className='flex justify-center lg:py-24 py-16 flex-col lg:gap-12 gap-6 w-screen'>
        <span className='lg:text-5xl text-4xl font-semibold lg:font-bold tracking-tight uppercase flex items-center justify-center text-[#6100c1]/80'>our solutions</span>
        <div className='flex flex-col gap-10 justify-center items-center lg:px-0 px-6' ref={ref}>
          <motion.div className='flex  lg:w-[50rem] h-fit gap-4' ref={ref} animate={animations}>
            <span className='w-[20%] flex justify-end'><BiNetworkChart className='w-16 h-20 text-[#6100c1]/80'/></span>
            <span className='flex flex-col gap-3 mt-4 w-[80%]'>
              <span className='text-xl font-semibold text-[#1A1B1F]/90 tracking-wider uppercase'>Networks</span>
              <span className='text-lg font-light text-[#1A1B1F]/60'>Our network is a collective of multi-sectorial stakeholder who, without our intervention, would work in siols. We host the platform for these stakeholders to collaborate, exchange resources and ensure impact is scaled</span>
            </span>
          </motion.div>
          <motion.div className='flex  lg:w-[50rem] h-fit gap-4' ref={ref} animate={animations}>
          <span className='w-[20%] flex justify-end'><GiBookshelf className='w-16 h-20 text-[#6100c1]/80'/></span>
            <span className='flex flex-col gap-3 mt-4 w-[80%]'>
              <span className='text-xl font-semibold text-[#1A1B1F]/90 tracking-wider uppercase'>Learning</span>
              <span className='text-lg font-light text-[#1A1B1F]/60'>Think-labs and accelerator programs aimed at driving pioneering breakthrough ideas for transfotmation</span>
            </span>
          </motion.div>
          <motion.div className='flex  lg:w-[50rem] h-fit gap-4' ref={ref} animate={animations}>
          <span className='w-[20%] flex justify-end'><FaUsers className='w-16 h-20 text-[#6100c1]/80'/></span>
            <span className='flex flex-col gap-3 mt-4 w-[80%]'>
              <span className='text-xl font-semibold text-[#1A1B1F]/90 tracking-wider uppercase'>consulting</span>
              <span className='text-lg font-light text-[#1A1B1F]/60'>Creating unparalleled value for our teeming clients </span>
            </span>
          </motion.div>
          <motion.div className='flex  lg:w-[50rem] h-fit gap-4' ref={ref} animate={animations}>
          <span className='w-[20%] flex justify-end'><BiHealth className='w-16 h-20 text-[#6100c1]/80'/></span>
            <span className='flex flex-col gap-3 mt-4 w-[80%]'>
              <span className='text-xl font-semibold text-[#1A1B1F]/90 tracking-wider uppercase'>health & wellness</span>
              <span className='text-lg font-light text-[#1A1B1F]/60'>We are building a tech-enabled platform that fosters the wellbeing of creatives and their allies</span>
            </span>
          </motion.div>
          <motion.div className='flex  lg:w-[50rem] h-fit gap-4' ref={ref} animate={animations}>
          <span className='w-[20%] flex justify-end'><BiVideoRecording className='w-16 h-20 text-[#6100c1]/80'/></span>
            <span className='flex flex-col gap-3 mt-4 w-[80%]'>
              <span className='text-xl font-semibold text-[#1A1B1F]/90 tracking-wider uppercase'>media & entertainment</span>
              <span className='text-lg font-light text-[#1A1B1F]/60'>We are creating and amplifying compelling, authentic and mindset-shifting narratives,bypassing the status quo and redefining the future of storytelling in Africa</span>
            </span>
          </motion.div>
        </div>
    </div>
  )
}

export default Solution;