import {React, useEffect, useState } from 'react';
import Logo from '../assets/eden.png';
import banner from '../assets/mnch12.png';
import banner1 from '../assets/54.png';
import banner2 from '../assets/mnch9.png';
// import abj from '../assets/mnch7.png';
import { FaLinkedinIn,  FaInstagram, FaTwitter, FaYoutube, FaClock } from 'react-icons/fa';
import {TiLocation} from 'react-icons/ti';
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {speakers1} from './data1';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';


const Abuja = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div className='flex flex-col w-screen font-barlow'>
        <Link to='/'><div className='flex z-50 absolute lg:left-16 left-3 top-2 lg:top-6'><img className='lg:w-fit w-32 h-16 lg:h-20 opacity-90' alt='' src={Logo}></img></div></Link>
      <div className='flex flex-col lg:h-[30rem] h-[25rem] justify-end items-center bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
            <img src={banner1} alt='' className=' lg:w-[30rem] w-[20rem]'></img>
            <Link to='/register'><span className='flex items-center lg:px-5 px-3 py-2 border-none rounded-md text-[#6100c1]/80 w-fit font-medium text-xl bg-[#E2E7E9]/90 mb-20'>Register</span></Link>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center lg:py-10 py-5 lg:px-32 px-4 bg-[#6100c1]/90  border-b border-white'>
            <span className='lg:flex-row flex-col flex lg:text-start text-center gap-2 items-center justify-center w-[30rem]'>
              <TiLocation className='text-[#E2E7E9]/90' size={50}/>
              <span className='text-2xl font-medium text-[#E2E7E9]/90 leading-none'>Shehu Musa Yar’Adua Center, One Memorial Drive, Abuja</span>
            </span>
            <span className='lg:flex-row flex-col flex text-center gap-2 items-center justify-center w-[30rem]'>
              <FaClock className='text-[#E2E7E9]/90' size={30}/>
              <span className='text-2xl font-medium text-[#E2E7E9]/90 '>Friday 22nd of March, 2024</span>
            </span>
            <span className='lg:flex hidden opacity-0 gap-2 items-center justify-center w-[16rem] relative'>
                <span className='pl-3 pr-10 py-1 rounded bg-white' onClick={toggleMenu}><SlCalender className='text-[#6100c1]/90' size={30}/></span>
            </span>
            {
            isOpen && (
              <div className='bg-[#ffffff]/95 rounded border-2 border-[#6100c1]/90 pl-6 py-4 flex flex-col gap-3 w-fit pr-20 absolute right-60 -bottom-48 z-10'>
                <span className='uppercase text-base font-normal'>Google Calender</span>
                <span className='uppercase text-base font-normal'>Outlook</span>
                <span className='uppercase text-base font-normal'>Calender</span>
                <span className='uppercase text-base font-normal'>Calender</span>
              </div>
            )} 
        </div>
        <div className='flex lg:flex-row flex-col px-4 lg:px-4 lg:gap-12 gap-4 justify-center lg:py-10 py-5 bg-[#6100c1]/90'>
          <span className='flex flex-col lg:w-[42rem] text-[#6100c1]/90 gap-2'>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>10:00 am: Attendee Arrival & registration</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>10:30 am: Keynote speech</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>10: 45 am: Opening Speech</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>11: 00 am: Panel Discussion: "Policy Pathways: Reforming Maternal, Newborn, and Child Health in Nigeria"</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>12:30 pm: Refreshments and Break</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>1:30 pm - Panel Discussion- Social Impact x Innovation: Tackling women’s healthcare in Nigeria</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>3:00 pm: Closing Remarks & Call to Action</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>10:00 am - 6:00 pm: Medical screenings (Cervical Cancer, Sickle Cell, PCOS, General women’s health)</span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>6:00 pm- 9:00 pm: Networking Mixer </span>
            <span className='px-4 py-1 bg-[#E2E7E9] text-xl rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'>9:00 pm: Performance by the artiste Falana</span>
          </span>
          <span className='lg:w-[21rem] w-fit lg:h-[28rem] lg:mt-12 bg-white rounded-md flex relative'>
            <img className='w-full h-full object-cover rounded-md' src={banner2} alt=''></img>
          </span>
        </div>
        <div className='flex flex-col lg:pt-10 pt-5 items-center gap-5'>
          <span className='flex text-3xl font-semibold opacity-90 uppercase'>Our Speakers</span>
          <div className='flex w-screen lg:px-12'>
              <div className=' cursor-pointer z-10 image-swiper-button-prev flex items-center -mt-12 lg:ml-6'>
                  <IoIosArrowBack size={30} className='text-[#6100c1] lg:border-2 rounded-full p-1 border-[#6100c1]'/>
              </div>
              <Swiper
              breakpoints={{
                  640: {slidesPerView: 3},
                  0: {slidesPerView: 2}
              }}
              modules={[Pagination, Navigation]}
              navigation={{
                  nextEl: '.image-swiper-button-next',
                  prevEl: '.image-swiper-button-prev',
                  disabledClass: 'swiper-button-disabled'
              }}
          
              slidesPerView={3}
              spaceBetween={10}
              loop={true} className='lg:w-[87%] w-[95%] lg:h-[30rem] h-[21rem] mySwiper'>
                  { speakers1.map((speakers, i) => (
                      <SwiperSlide className='flex flex-col relative overflow-hidden box-border' key={i}>
                          {/* <div className='flex'><img src={swiper.img} alt='' className='w-[17rem] lg:h-60 h-24 rounded-3xl box-border'/></div> */}
                          <div className='flex'><img src={speakers.img} alt='' className='w-[23rem] lg:h-80 h-40 rounded-3xl box-border '></img></div>
                          <div className='flex flex-col mt-4'>
                              <span className='lg:text-xl text-sm text-center lg:text-start font-light lg:font-extrabold text-[#000000]/90 uppercase'>{speakers.name}</span>
                              <span className='flex flex-col gap-2'>
                                  <span className='lg:text-base text-center lg:text-start  text-xs font-normal text-[#000000]/50 uppercase'>{speakers.title}</span>
                              </span>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
              <div className=' cursor-pointer z-10 image-swiper-button-next flex items-center -mt-12 lg:mr-6'>
                  <IoIosArrowForward size={30} className='text-[#6100c1] lg:border-2 rounded-full p-1 border-[#6100c1]'/>
              </div>
              
          </div>
          <div className='flex flex-col items-center w-screen justify-center lg:py-12 py-8 px-4 gap-5 bg-[#000000]/80'>
            <Link to='/register'><span className='flex items-center lg:px-5 px-3 py-2 border-none rounded-md text-[#6100c1]/80 w-fit font-medium text-xl bg-[#E2E7E9]/90'>Register</span></Link>
            <span className='text-xl font-semibold text-center text-[#E2E7E9] lg:w-[35rem]'>Join other brave champions and stakeholders for our upcoming submit #transformingtogethersummit</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-36 bg-[#6100c1] px-4 py-10 lg:justify-center lg:items-center'>
        <span className='flex flex-col gap-2'>
            <span className='flex flex-col'>
              <span className='text-2xl font-semibold opacity-90 uppercase text-[#E2E7E9]'> Share your story </span>
              <span className='text-lg font-normal opacity-95 text-[#E2E7E9]'>Tell your personal experience around maternal and child health</span>
            </span> 
            <span className='flex flex-col p-4 bg-white rounded-md z-20 lg:mt-0 mt-2 w-fit '>
                <input className=" lg:w-[30rem] h-40 mb-2 rounded px-3 bg-[#6100c1]/70 text-[#061c56] outline-none" placeholder="typing..."></input> 
                <span className='flex gap-4'>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="First Name"></input>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Last Name"></input>
                </span>
                <span className='flex gap-4'>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Email"></input>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Role"></input>
                </span>
                <span className='flex'><input className= 'px-3 py-2 w-fit rounded  bg-[#E2E7E9]/90 text-[#6100c1]/80 uppercase text-sm font-semibold hover:text-white' type='submit' value='send message'></input></span>
            </span>
        </span>
        <div className='flex flex-col lg:gap-7 gap-3'>
            <div className='flex flex-col text-[#E2E7E9]'>
              <span className='text-xl opacity-80 font-medium'>Get in touch</span>
              <span className='text-xl opacity-80 font-medium'>info@edenventuregroup.com</span>
            </div>
            <div className='flex '>
                <img src={Logo} className='lg:w-fit w-32 h-16 lg:h-20 opacity-90' alt=''></img>
            </div>
            <div className='flex lg:gap-3 gap-1'>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.linkedin.com/company/evgnigeria/?viewAsMember=true' rel='noreferrer'><FaLinkedinIn className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.instagram.com/edenventuregroup/?hl=en' rel='noreferrer'><FaInstagram className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://twitter.com/weecreateafrica?s=21&t=DspMjJG2ePwZzOqrDbEHUw' rel='noreferrer'><FaTwitter className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.youtube.com/@weecreateafrica?sub_confirmation=1' rel='noreferrer'><FaYoutube className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Abuja;