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
              duration: 1,
            }
      })
  }
  if(!inView){
      animations.start({opacity: 0})
  }
})


  return (
    <div className='flex lg:py-24 py-16 flex-col gap-4 w-screen font-barlow lg:h-[75rem] h-[110rem] bg-gray-200' ref={ref}>
        <span className='lg:text-5xl text-3xl font-semibold lg:font-bold tracking-tight uppercase flex items-center justify-center text-[#6100c1]/80'>our solutions</span>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:px-12 lg:py-6 px-6'>
          <motion.div className='flex flex-col text-[#1A1B1F]/90 hover:text-white lg:w-[20rem] lg:h-[25rem] py-4 px-6 gap rounded-lg bg-white hover:bg-[#6100c1]/60 duration-300' animate={animations} id='main'>
            <span className='flex justify-center'><BiNetworkChart className='w-16 h-20 text-[#6100c1]/90' id='icon'/></span>
            <span className='flex flex-col gap-3 mt-4 text-center'>
              <span className='text-xl lg:text-2xl font-semibold lg:font-black tracking-wider uppercase' id='text'>Networks</span>
              <span className='text-lg font-light opacity-60' id='textt'>Our network is a collective of multi-sectorial stakeholders who, without our intervention, would work in silos. We host the platform for these stakeholders to collaborate, exchange resources and ensure impact is scaled.
              </span>
            </span>
          </motion.div>
          <motion.div className='flex flex-col text-[#1A1B1F]/90 hover:text-white lg:w-[20rem] lg:h-[25rem] py-4 px-6 gap rounded-lg bg-white hover:bg-[#6100c1]/60 duration-300' animate={animations}>
          <span className='flex justify-center'><GiBookshelf className='w-16 h-20 text-[#6100c1]/90'/></span>
            <span className='flex flex-col gap-3 mt-4 text-center'>
              <span className='text-xl lg:text-2xl font-semibold lg:font-black tracking-wider uppercase'>Learning</span>
              <span className='text-lg font-light opacity-60'>Think-labs and accelerator programs aimed at driving pioneering breakthrough ideas for transfotmation</span>
            </span>
          </motion.div>
          <motion.div className='flex flex-col text-[#1A1B1F]/90 hover:text-white lg:w-[20rem] lg:h-[25rem] py-4 px-6 gap rounded-lg bg-white hover:bg-[#6100c1]/60 duration-300' animate={animations}>
          <span className='flex justify-center'><FaUsers className='w-16 h-20 text-[#6100c1]/90'/></span>
            <span className='flex flex-col gap-3 mt-4 text-center'>
              <span className='text-xl lg:text-2xl font-semibold lg:font-black tracking-wider uppercase'>Consulting</span>
              <span className='text-lg font-light opacity-60'>Creating unparalleled value for our teeming clients </span>
            </span>
          </motion.div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:px-12 lg:py-6 px-6'>
           <motion.div className='flex flex-col text-[#1A1B1F]/90 hover:text-white lg:w-[20rem] lg:h-[25rem] py-4 px-6 gap rounded-lg bg-white hover:bg-[#6100c1]/60 duration-300' animate={animations}>
              <span className='flex justify-center'><BiHealth className='w-16 h-20 text-[#6100c1]/90'/></span>
              <span className='flex flex-col gap-3 mt-4 text-center'>
                <span className='text-xl lg:text-2xl font-semibold lg:font-black tracking-wider uppercase'>Health & Wellness</span>
                <span className='text-lg font-light opacity-60'>We are building a tech-enabled platform that fosters the wellbeing of creatives and their allies</span>
              </span>
            </motion.div>
            <motion.div className='flex flex-col text-[#1A1B1F]/90 hover:text-white lg:w-[20rem] lg:h-[25rem] py-4 px-6 gap rounded-lg bg-white hover:bg-[#6100c1]/60 duration-300' animate={animations}>
              <span className='flex justify-center'><BiVideoRecording className='w-16 h-20 text-[#6100c1]/90'/></span>
              <span className='flex flex-col gap-3 mt-4 text-center'>
                <span className='text-xl lg:text-2xl font-semibold lg:font-black tracking-wider uppercase'>Media & Entertainment</span>
                <span className='text-lg font-light opacity-60'>We are creating and amplifying compelling, authentic and mindset-shifting narratives,bypassing the status quo and redefining the future of storytelling in Africa</span>
              </span>
            </motion.div>
        </div>
    </div>
  )
}

export default Solution;