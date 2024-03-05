import React, {useState} from 'react'
import Logo from '../assets/new6.png';
import useScrollDirection  from './useScrollDirection'
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu }from 'react-icons/ai';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollDirection = useScrollDirection();

  const[toggleMenu, setToggleMenu] = useState(false);
  const[toggleInitiative, setToggleInitiative] = useState(false);

  return (
    <div className={`flex lg:pr-32 lg:pl-24 pl-6 pr-8 lg:py-2 py-4 bg-transparent border-none justify-between font-barlow w-screen z-50 sticky top-0 transition-all duration-500 ${scrollDirection === "down" ? "-top-32" : "top-0"}`}>
            <Link to='/'>
              <div className='flex lg:gap-4 gap-3 justify-center items-center py-2'>
                <img src={Logo} className='lg:w-16 w-12 h-16 lg:h-20 opacity-90' alt=''/>
              </div>
            </Link>
            <div className='flex'>
              <div className='hidden lg:flex justify-center items-center lg:gap-12 gap-3 text-white'>
                <Link to='/profile'><span className= 'lg:font-bold font-light uppercase lg:text-base text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>About us</span></Link>
                <span className='lg:font-bold font-light uppercase lg:text-base text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90' onClick = {() => {setToggleInitiative(true)}}>Initiatives</span>
                <Link to='/mnch'><span className='lg:font-bold font-light uppercase lg:text-base text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>mnch</span></Link>
                <span className='lg:font-bold font-light uppercase lg:text-base text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>Donate</span>
              </div>
              <div className='flex justify-center items-center'>
                <AiOutlineMenu className='lg:hidden' color='#6100c1' size={26} onClick = {() => {setToggleMenu(true)}}/>
              </div>
            </div>

            {
              toggleMenu && (
                <motion.div className='flex items-end flex-col gap-12 text-start justify-start bg-white z-auto p-8 right-0 fixed w-[70%] bottom-0 lg:hidden h-screen rounded-l' initial={{ x:'100vw'}}
                animate={{ x: 0}} transition={{type: 'spring', duration: 2, bounce: 0.3}}>
                  <AiOutlineClose color='#6100c1' size={26} onClick = {() => {setToggleMenu(false)}}/>
                  <Link to='/profile'><span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>About us</span></Link> 
                  <Link to='/wecreate'><span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>Initiatives</span></Link>
                  <span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>News</span>
                  <span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>Donate</span>
                </motion.div>
              )
            }
            {
              toggleInitiative && (
                <div className='flex absolute top-20 left-[58.5rem]'>
                  <Link to='/wecreate'><span onClick = {() => {setToggleInitiative(false)}} className='text-base text-[#6100c1] p-2 rounded bg-white hover:bg-[#6100c1] hover:text-white'>WEECreateAfrica</span></Link>
                </div>
              )
            }
    </div>
  )
}

export default Header;