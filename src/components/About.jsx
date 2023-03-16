import React, { useEffect, useRef} from 'react';
import Aboutt from '../assets/about.png';
import { motion, useAnimation, useInView } from 'framer-motion';
import {Link} from 'react-router-dom';


const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const animations = useAnimation();

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
})

  return (
    <div className='flex py-8 px-6 lg:px-0 lg:h-screen h-[54rem] justify-center font-barlow'>
        <div className='flex lg:gap-16 gap-6 lg:flex-row flex-col' >
            <img src={Aboutt} alt='' className='h-[27rem] lg:h-full lg:w-full w-screen'/>
            <motion.div className='flex flex-col lg:gap-8 gap-6 lg:mt-24' animate={animations} ref={ref}>
                <span className='text-4xl font-bold tracking-wider'>About Us</span>
                <span className='lg:text-base text-sm font-light tracking-wide lg:w-[28rem] lg:mb-0 mb-4'>
                    Eden Venture Group(EVG) is a venture firm designed by women to innovate for behavioural change and social impact. We are a social enterprise curating,developing, and postioning social entrepreneurs froe scale. We believe everyone deserves an oppurtunity to create a meaningful impact in the world and we provide people,businesses and institutions with the right skills,support and networks to do so.
                </span>
                <Link to='/profile'><span className='px-6 py-3 border-none rounded-md bg-[#6100c1] w-32 lg:mt-8 text-[#E2E7E9]/90'>Read More..</span></Link>
            </motion.div>
        </div>
    </div>
  )
}

export default About;