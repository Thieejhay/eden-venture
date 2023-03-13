import React, {useState} from 'react'
import Logo from '../assets/new6.png';
import useScrollDirection  from './useScrollDirection'
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu }from 'react-icons/ai';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollDirection = useScrollDirection();

  const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={`flex lg:pr-32 lg:pl-24 pl-6 pr-8 lg:py-2 py-4 bg-transparent border-none justify-between w-screen z-50 sticky top-0 transition-all duration-500 ${scrollDirection === "down" ? "-top-32" : "top-0"}`}>
            <Link to='/'>
              <div className='flex lg:gap-4 gap-3 justify-center items-center py-2'>
                <img src={Logo} className='lg:w-16 w-12 h-16 lg:h-20 opacity-90' alt=''/>
                {/* <div className='flex flex-col justify-center items-center gap-0'>
                  <h1 className='lg:text-3xl tracking-widestt text-2xl font-semibold font-roboto'>EDEN</h1>
                  <p className='text-xs font-extralight'>VENTURE GROUP</p>
                </div> */}
              </div>
            </Link>
            <div className='flex'>
              <div className='hidden lg:flex justify-center items-center lg:gap-12 gap-3 text-white'>
                <Link to='/profile'><span className= ' font-light uppercase lg:text-sm text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>About us</span></Link>
                <span className='font-light uppercase lg:text-sm text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>Programs</span>
                <span className='font-light uppercase lg:text-sm text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>News</span>
                <span className='font-light uppercase lg:text-sm text-xs hover:text-[#6100c1] cursor-pointer text-[#E2E7E9]/90'>Donate</span>
              </div>
              <div className='flex justify-center items-center'>
                <AiOutlineMenu className='lg:hidden' color='#6100c1' size={26} onClick = {() => {setToggleMenu(true)}}/>
              </div>
            </div>

            {
              toggleMenu && (
                <motion.div className='flex items-end flex-col gap-12 text-start justify-start bg-white z-auto p-8 right-0 fixed w-[50%] bottom-0 lg:hidden h-screen' initial={{ x:'100vw'}}
                animate={{ x: 0}} transition={{type: 'spring', duration: 2, bounce: 0.3}}>
                  <AiOutlineClose color='#6100c1' size={26} onClick = {() => {setToggleMenu(false)}}/>
                  <Link to='/profile'><span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>About us</span></Link> 
                  <span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>Programs</span>
                  <span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>News</span>
                  <span onClick = {() => {setToggleMenu(false)}} className='text-[#6100c1]'>Donate</span>
                </motion.div>
              )
            }
            
    </div>
  )
}

export default Header;