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
    <div className='flex justify-center lg:py-32 lg:px-0 px-6 py-16 bg-[#6100c1]/80 font-barlow'>
        <motion.div className='text-center flex w-[55rem] text-3xl font-semibold text-[#E2E7E9]/90' animate={animations} ref={ref}>We are a social enterprise curating, developing and positioning social enterpreneurs fro scale. We belive everyone deserves an opportunity to create meaningful impact in the world abd we provide people, businesses and institutions with the right skills, support, and the network to do so.</motion.div>
    </div>
  )
}

export default Aboutt;