import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


const Aboutt = () => {

  const ref = useRef(null)
  const inView = useInView(ref, { once: false })
  const animations = useAnimation();

  useEffect(() => {
    if(inView){
      animations.start({
          opacity: 1,
          transition: {
              ease: 'easeIn',
              duration: 1.2,
            }
      })
  }
  if(!inView){
      animations.start({opacity: 0})
  }
})


  return (
    <div className='flex justify-center lg:py-32 lg:px-0 px-6 py-16 bg-[#000000]/60 font-barlow'>
        <motion.div className='text-center flex w-[55rem] lg:text-3xl text-xl font-medium lg:font-semibold text-[#E2E7E9]' animate={animations} ref={ref}>We are a collective of social entrepreneurs collaborating to develop, support and empower underserved and underrepresented demographics in emerging economies, with a core focus on Africa. We believe everyone deserves an opportunity to create meaningful impact in the world and we provide people, businesses and institutions with the right skills, support, and the networks to do so.
        </motion.div>
    </div>
  )
}

export default Aboutt;