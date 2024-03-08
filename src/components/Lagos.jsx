import {React, useEffect, useState, useRef } from 'react';
import Logo from '../assets/eden.png';
import banner from '../assets/mnch13.png';
import banner1 from '../assets/55.png';
// import abj from '../assets/mnch7.png';
import { FaLinkedinIn,  FaInstagram, FaTwitter, FaYoutube, FaClock } from 'react-icons/fa';
import {TiLocation} from 'react-icons/ti';
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {speakers2} from './data1';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import emailjs from '@emailjs/browser';


const Lagos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ai9a35h', 'template_1elk1vy', form.current, 'eSMX_5yNJFbgAvpAb')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShowPopup(true); // Show the pop-up after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='flex flex-col w-screen font-barlow'>
        <Link to='/'><div className='flex z-50 absolute lg:left-16 left-3 top-2 lg:top-6'><img className='lg:w-44 w-32 h-16 lg:h-20 opacity-90' alt='' src={Logo}></img></div></Link>
      <div className='flex flex-col lg:h-[30rem] h-[25rem] justify-end items-center bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
            <img src={banner1} alt='' className=' lg:w-[30rem] w-[20rem]'></img>
            <Link to='/register'><span className='flex items-center lg:px-12 px-3 lg:py-5 py-2 uppercase border-none rounded-md text-[#6100c1]/80 w-fit font-medium text-2xl bg-[#E2E7E9]/90 mb-20'>Register</span></Link>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center py-10 lg:px-32 px-4 bg-[#6100c1]/90  border-b border-white'>
            <span className='lg:flex-row flex-col flex text-center gap-2 items-center justify-center w-[30rem]'>
              <TiLocation className='text-[#E2E7E9]/90' size={33}/>
              <span className='text-2xl font-medium text-[#E2E7E9]/90 leading-none'>Lagos Marriott Hotel, Ikeja</span>
            </span>
            <span className='lg:flex-row flex-col flex text-center gap-2 items-center justify-center w-[30rem]'>
              <FaClock className='text-[#E2E7E9]/90' size={30}/>
              <span className='text-2xl font-medium text-[#E2E7E9]/90 '>Tuesday 12th of March, 2024</span>
            </span>
            <span className='lg:flex opacity-0 hidden gap-2 items-center justify-center w-[16rem] relative'>
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
        <div className='flex lg:flex-row flex-col px-4 lg:px-4 lg:gap-6 gap-2 justify-center lg:py-10 py-5 bg-[#6100c1]/90'>
          <span className='flex flex-col lg:w-[48rem] text-lg leading-6 text-[#6100c1]/90 gap-2 font-serif'>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>9:00 am: </span> Arrival for event & registration</span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>10:00 am -  Breathwork Session - Oyinkan Talabi </span> </span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>10:20am - 10:30am: Welcome remarks by Fifehan Osikanlu</span>  </span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>10:30- 10:40 am: Keynote Speech:  Unlocking Hope, Revolutionising Maternal and Child Healthcare in Nigeria”  Dr Oliver Ezechi </span> - An overview of the current state, highlighting the challenges and triumphs related to MNCH women's sexual health and rights in Nigeria.</span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>10:45 am- 11:25: - Panel Discussion 1: "Policy Pathways: Reforming Maternal, Newborn, and Child Health in Nigeria"</span> -  Industry experts, activists, and healthcare professionals discuss systemic, cultural, and economic barriers women face in accessing proper MNCH care and also actionable steps to improve access to good medical infrastructure,  promotion and enforcement of a higher standard of Maternal and child healthcare in Nigeria. Speakers: <span className='font-semibold'>Dr Dolapo Fasawe, Dr Omolola Salako, Dr Bosede Afolabi, Moderator: Dewunmi Alugbin</span></span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>11:25 pm:</span>Refreshments and Break</span>
            <span className='lg:flex hidden px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>Vox pop style interviews with guests (10am-5pm)</span></span>
          </span>
          <span className='flex flex-col lg:w-[48rem] text-lg leading-6 text-[#6100c1]/90 gap-2 font-serif'>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>12:15 pm - 12:35 pm: Deep Dive: "Nigeria's MNCH Landscape: Saving 2 million lives by 2030" by Dr Dolapo Fasawe </span> – A deeper dive, expert overview of the current state, highlighting the challenges and triumphs related to MNCH, women's sexual health and rights and innovative pathways to crash the maternal & infant mortality rates in Nigeria. - Commissioner of Women’s Affairs Lagos State</span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>12: 40 pm- 1:30 - Panel Discussion- Social Impact x Innovation: Tackling Women’s Healthcare in Nigeria (Falana, Tade , Rhoda Robinson, Michael Kunnuji; moderator: Fifehan Osikanlu)</span> </span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>1:35 pm: Music Performance by: Falana</span> </span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>1.40 - 1:45 pm Call to Action by Dewunmi Alugbin:</span> Encouraging every high-level stakeholder or participant to commit to one action their organisation can engage in to improve women’s healthcare in Nigeria; particularly concerning pregnant women,  Mothers and newborns.</span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>1:45 - 1:50 pm: Closing Remarks:  by Fifehan Osikanlu </span></span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>2:00pm - 5pm:</span> Networking & Medical Screenings</span>
            <span className='px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>Medical Screenings (10am - 5pm)</span></span>
            <span className='flex lg:hidden px-4 py-1 bg-[#E2E7E9] rounded-xl hover:bg-transparent hover:text-[#E2E7E9]/80 transition duration-300'><span className='font-semibold '>Vox pop style interviews with guests (10am-5pm)</span></span>
          </span>
          {/* <span className='lg:w-[24rem] w-fit lg:h-[28rem] lg:mt-12 bg-white rounded-md flex relative'>
            <img className='w-full h-full object-cover rounded-md' src={banner2} alt=''></img>
          </span> */}
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
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false
            }}
            navigation={{
                nextEl: '.image-swiper-button-next',
                prevEl: '.image-swiper-button-prev',
                disabledClass: 'swiper-button-disabled'
            }}
        
            slidesPerView={3}
            spaceBetween={10}
            loop={true} className='lg:w-[87%] w-[95%] lg:h-[30rem] h-[18rem] mySwiper'>
                { speakers2.map((speakers, i) => (
                    <SwiperSlide className='flex flex-col relative overflow-hidden box-border' key={i}>
                        {/* <div className='flex'><img src={swiper.img} alt='' className='w-[17rem] lg:h-60 h-24 rounded-3xl box-border'/></div> */}
                        <div className='flex'><img src={speakers.img} alt='' className='w-[23rem] lg:h-80 h-40 rounded-3xl box-border '></img></div>
                        <div className='flex flex-col mt-4'>
                            <span className='lg:text-xl text-sm text-center lg:text-start font-light lg:font-extrabold text-[#000000]/90 uppercase'>{speakers.name}</span>
                            <span className='flex flex-col gap-2'>
                                <span className='lg:text-base text-xs font-normal text-center lg:text-start text-[#000000]/50'>{speakers.title}</span>
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            

            <div className=' cursor-pointer z-10 image-swiper-button-next flex items-center -mt-12 lg:mr-6'>
                <IoIosArrowForward size={30} className='text-[#6100c1] lg:border-2 rounded-full p-1 border-[#6100c1]'/>
            </div>
        </div>
        </div>
        <div className='flex justify-center items-center pt-3 pb-6'><Link to='/register'><span className='flex items-center lg:px-12 px-3 lg:py-5 py-2 border-none rounded-md bg-[#6100c1]/70 w-fit text-3xl text-[#E2E7E9]/90 uppercase'>Register</span></Link></div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-36 bg-[#6100c1] px-4 py-10 lg:justify-center lg:items-center'>
        <span className='flex flex-col gap-2'>
            <span className='flex flex-col'>
              <span className='text-2xl font-semibold opacity-90 uppercase text-[#E2E7E9]'> Share your story </span>
              <span className='text-lg font-normal opacity-95 text-[#E2E7E9] lg:w-[30rem]'>Tell us about your personal experience related to maternal and child health(MNCH)</span>
            </span> 
            <span onSubmit={sendEmail} ref={form} className='flex flex-col p-4 bg-white rounded-md z-20 lg:mt-0 mt-2 w-fit '>
                <input className=" lg:w-[30rem] h-40 mb-2 rounded px-3 bg-[#6100c1]/70 text-[#061c56] outline-none" placeholder="typing..."></input> 
                <span className='flex gap-4'>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="First Name" name='user_name'></input>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Last Name" name='user_name2'></input>
                </span>
                <span className='flex gap-4'>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Email" name='user_email'></input>
                  <input className=" w-[50%] h-8 rounded-sm mb-2  px-3 text-[#E2E7E9] bg-[#6100c1]/80 outline-none" placeholder="Role"></input>
                </span>
                <span className='flex'><input className= 'px-3 py-2 w-fit rounded  bg-[#E2E7E9]/90 text-[#6100c1]/80 uppercase text-sm font-semibold hover:text-white' name='message' type='submit' value='send message'></input></span>
            </span>
        </span>
        <div className='flex flex-col lg:gap-7 gap-3'>
            <div className='flex flex-col text-[#E2E7E9]'>
              <span className='text-xl opacity-80 font-medium'>Get in touch</span>
              <span className='text-xl opacity-80 font-medium'>info@edenventuregroup.com</span>
            </div>
            <div className='flex '>
                <img src={Logo} className='lg:w-44 w-32 h-16 lg:h-20 opacity-90' alt=''></img>
            </div>
            <div className='flex lg:gap-3 gap-1'>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.linkedin.com/company/evgnigeria/?viewAsMember=true' rel='noreferrer'><FaLinkedinIn className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.instagram.com/edenventuregroup/?hl=en' rel='noreferrer'><FaInstagram className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://twitter.com/weecreateafrica?s=21&t=DspMjJG2ePwZzOqrDbEHUw' rel='noreferrer'><FaTwitter className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
                <span className='p-1 bg-[#E2E7E9]/80 rounded-md'><a href='https://www.youtube.com/@weecreateafrica?sub_confirmation=1' rel='noreferrer'><FaYoutube className='lg:w-4 w-2 h-2 lg:h-4 text-[#000000]/90'/></a></span>
            </div>
        </div>
      </div>
      {showPopup && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Your story has been shared. Thank you!</h2>
            <button onClick={() => setShowPopup(false)} className='mt-4 px-4 py-2 bg-[#6100c1]/80 text-white rounded-md hover:[#6100c1]
            '>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Lagos