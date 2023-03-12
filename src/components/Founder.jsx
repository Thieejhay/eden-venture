import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';



const Founder = () => {

  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']) , useScroll, useTransform bg-[url("../assets/bg5.png")]

  return (
    <motion.div className='flex'>
      <div className='bg-[#000000]/90 flex relative h-screen bg-cover w-screen'>
        <div className='flex z-50 absolute'><Header /></div>
        <div className='flex flex-col gap-3 absolute bottom-6 lg:left-24 left-3'>
          <span className='lg:text-7xl text-3xl font-semibold lg:font-extrabold tracking-tight text-[#E2E7E9]/90 uppercase'>developing,</span>
          <span className='lg:text-7xl text-3xl font-semibold lg:font-extrabold tracking-tight text-[#6100c1]/80 uppercase'>supporting and</span>
          <span className='lg:text-7xl text-3xl font-semibold lg:font-extrabold tracking-tight text-[#E2E7E9]/90 uppercase'>empowering the</span>
          <span className='lg:text-7xl text-3xl font-semibold lg:font-extrabold tracking-tight text-[#6100c1]/80 uppercase'>underserved.</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Founder;