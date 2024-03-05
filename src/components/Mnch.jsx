import {React, useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/eden.png';
import Footer from './Footerr';
import { Link } from 'react-router-dom';
import banner from '../assets/mnch11.png';
import about from '../assets/mnch133.png';
import about2 from '../assets/mnch6.png';
import about3 from '../assets/mnch5.png';
import about4 from '../assets/mnch10.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {speakers} from './data1';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {FaClock, FaDownload} from 'react-icons/fa';
import {TiLocation} from 'react-icons/ti';
import pat from '../assets/logo/logo1.png';
import pat2 from '../assets/logo/logo2.png';
import pat3 from '../assets/logo/logo3.png';
import pat4 from '../assets/logo/logo4.png';
import pat5 from '../assets/logo/logo5.png';
import pat6 from '../assets/logo/logo6.png';
import pat7 from '../assets/logo/logo7.png';
import pat8 from '../assets/logo/logo8.png';
import pat9 from '../assets/logo/logo9.png';
import pat10 from '../assets/logo/logo10.png';
import pat11 from '../assets/logo/logo11.png';
import pat12 from '../assets/logo/logo12.png';
import pat13 from '../assets/logo/logo13.png';




const Mnch = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  // const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className='flex flex-col w-screen font-barlow overflow-clip'>
      <Link to='/'><div className='flex z-50 absolute lg:left-16 left-3 top-2 lg:top-6'><img className='lg:w-44 w-32 h-16 lg:h-20 opacity-90' alt='' src={Logo}></img></div></Link>
      <div className='flex flex-col h-[30rem] justify-end items-center bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
        <span className=' lg:text-6xl text-xl  text-center items-center justify-center flex font-bold text-[#E2E7E9]/90 tracking-wider uppercase'>Maternal,Newborn </span>
        <span className=' lg:text-6xl text-xl  text-center items-center justify-center flex font-bold text-[#E2E7E9]/90 mb-28 tracking-wider uppercase'> and child health (MNCH)</span>
      </div>
      
      <div className='flex flex-col lg:py-10 py-5 lg:gap-5 gap-2'>
        <div className='flex flex-col gap-2 px-4 lg:px-24 relative'>
          <span className='flex flex-col lg:gap-3 gap-1'>
            <span className='lg:text-lg text-justify lg:text-start text-base font-medium opacity-80 lg:w-[47rem] '><span className='text-4xl'>B</span>efore you finish reading these words, a mother or child in Nigeria may have tragically lost their life, not from insecurity, economic crisis or political unrest, but from grappling with a silent crisis – Maternal, Newborn, and Child Health (MNCH). According to the Gates Foundation’s <HashLink to='#report' smooth><span className=' underline text-blue-900 '>2023 Goalkeepers Report</span></HashLink>, Nigeria holds the chilling title of third-highest maternal mortality rate in the world. It is unacceptable that childbirth is still a death sentence daily for 800 mothers and babies in Nigeria.</span>
            <span className='lg:text-lg text-justify lg:text-start text-base font-medium opacity-80 lg:w-[47rem]  '>This is not just a statistic; it is a baby, daughter, sister, neighbour, wife, friend, colleague, in-law or partner lost. These tragic stories are not broadcast to millions of viewers daily, but they are stories that still must be told. They represent the shattered dreams, lost potentials, and heartbreak of countless families across the nation.</span>
            <span className='lg:text-lg text-justify lg:text-start text-base font-medium opacity-80 lg:w-[47rem] '>The giant of Africa bears a heavy burden when it comes to MNCH. With a population exceeding 200 million, it is home to one of the highest maternal mortality rates in the world. According to UNICEF, Nigeria accounts for nearly 20% of global maternal deaths, with approximately 814 mothers losing their lives for every 100,000 live births. Behind each number lies the story of a mother who embarked on the journey of childbirth with hope in her heart, only to encounter obstacles. Limited access to quality healthcare facilities, inadequate prenatal care, and cultural beliefs often stand as barriers between these women and the care they desperately need. For many, the choice between seeking medical assistance and adhering to traditional practices is a dilemma fraught with risks.</span>
            <span className='lg:text-lg text-justify lg:text-start text-base font-medium opacity-80 '>Yet, despite this heartbreaking reality, the glimmer of hope is YOU and I. Women can navigate the hurdles of childbirth with the right care at the right time, support, become champions for change, and build bright futures for themselves, their children, and their families. We envision a world where childbirth is not a gamble. We are fueled by a single, powerful vision: to drastically reduce maternal and infant mortality rates in Nigeria. This is a revolution – a fight for every mother and child to have the quality healthcare they deserve.</span>
            <span className='lg:text-lg text-justify lg:text-start text-base font-medium opacity-80 '>We are joining hands with Mothers, fathers, healthcare workers, experts, policymakers, advocates, communities, and stakeholders to rewrite the narrative, through initiatives aimed at increasing equitable access to essential healthcare services, and medical innovation, promoting maternal education, empowering communities, and changing social attitudes.</span>
            <span className='text-lg font-extrabold opacity-80 w-[45rem] '>Become an MNCH Champion today!</span>
          </span>
          <span className='lg:w-[25rem] w-fit lg:h-[32rem] rounded-md lg:absolute right-16 top-6'>
            <img className='w-full h-full object-cover rounded-md' src={about} alt=''></img>
          </span>
        </div>
      </div>
      <div className='flex flex-col lg:py-10 py-5 items-center gap-5'>
        <span className='flex text-3xl font-semibold opacity-90 uppercase'>Our MNCH champions</span>
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
            loop={true} className='lg:w-[87%] w-[95%] lg:h-[28rem] h-[18rem] mySwiper'>
                { speakers.map((speakers, i) => (
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
      <div className='flex flex-col items-center justify-center py-12 gap-5 bg-[#000000]/80'>
        <span className='px-4 py-2 uppercase w-fit rounded bg-[#6100c1] text-[#ffffff] text-base font-bold'>become a champion</span>
        <span className='text-xl font-semibold text-center text-[#E2E7E9] lg:w-[35rem]'>Join other brave champions and stakeholders for our upcoming submit #transformingtogethersummit</span>
      </div>
      <div className='flex lg:py-10 py-5 px-4 lg:px-0 items-center justify-center '>
        <div className='flex lg:flex-row flex-col py-3 lg:gap-10 gap-5 z-50'>
          <Link to='/lagos-submit'><span className={`flex lg:h-[22rem] h-[19rem] w-fit flex-col shadow-2xl py-5 lg:px-24 px-4 gap-4 lg:gap-6 rounded-md bg-white text-[#000000] relative transition duration-300 ${isHovered ? 'bg-opacity-95' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-50 hover:rounded-md"></div>
            <span className='absolute lg:left-0 right-0 bottom-[0.12rem]'><img src={about3} alt='' className='lg:h-80 h-52 opacity-30'></img></span>
            <span className='text-xl font-medium uppercase w-[20rem] tracking-wider'>Transforming together summit <span className='uppercase font-bold'>lagos</span></span>
            <span className='flex gap-2 items-center'>
                <FaClock className='text-[#000000]/90' size={30}/>
                <span className='text-xl font-bold w-[15rem] tracking-wide'>Tuesday 12th of March, 2024</span>
            </span>
            <span className='flex gap-2 items-center lg:mt-8'>
                <TiLocation className='text-[#000000]/90' size={33}/>
                <span className='text-xl font-bold tracking-wider w-[16rem]'><span className='font-medium'>Lagos Marriott Hotel, Ikeja</span></span>
            </span>
            
            <span className='flex items-center py-1 rounded-md w-fit mt-6 font-semibold text-xl tracking-wider '>Click to register</span>
            </span>
          </Link>
          <Link to='/abuja-submit'><span className={`flex lg:h-[22rem] h-[20rem] w-fit flex-col shadow-2xl py-5 lg:px-24 px-4 gap-4 lg:gap-6 rounded-md bg-[#6100c1] text-white relative transition duration-300 ${isHovered ? 'bg-opacity-95' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-50 hover:rounded-md"></div>
            <span className='absolute -bottom-[0.12rem] -right-24 lg:-right-36'><img src={about2} alt='' className='lg:h-80 h-52 opacity-70'></img></span>
            <span className='text-xl font-medium uppercase w-[20rem] tracking-wider'>Transforming together summit <span className='uppercase font-bold'>Abuja</span></span>
            <span className='flex gap-2 items-center'>
                <FaClock className='text-[#E2E7E9]/90' size={30}/>
                <span className='text-xl font-bold w-[15rem] tracking-wide'>Friday 22nd of March, 2024</span>
            </span>
            <span className='flex gap-2 items-center'>
                <TiLocation className='text-[#E2E7E9]/90' size={33}/>
                <span className='text-xl font-bold tracking-wider w-[16rem]'><span className='font-medium'>Shehu Musa Yar’Adua Center, One Memorial Drive, Abuja</span></span>
            </span>
            <span className='flex items-center  py-1 rounded-md text-[#E2E7E9]/80 w-fit mt-2 font-bold text-xl tracking-wider'>Click to register</span>
            </span>
          </Link>
        </div>
      </div>
      <div className='flex lg:px-24 px-4 py-3'>
          <span className='flex flex-col gap-2'>
            <span className='text-2xl uppercase'>Our partners</span>
            <span className=' py-2 flex-col flex lg:gap-8 gap-6'>
                <div className='lg:flex hidden items-center lg:gap-8 gap-4'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat} className='lg:w-20 w-12 h-12 lg:h-20' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat2} className='lg:w-20 w-12 h-10 lg:h-16 mt-4' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat4} className='lg:w-20 w-12 h-4 lg:h-6' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat5} className='lg:w-20 w-12 h-6 lg:h-8' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat8} className='lg:w-full w-20 h-6 lg:h-8' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat9} className='lg:w-24 w-16 h-full ' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat10} className='lg:w-24 w-16 h-6 lg:h-8' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat3} className='lg:w-20 w-16 h-10 lg:h-16' alt=''></img>
                  </span>
                </div>
                <div className='lg:flex hidden items-center gap-8'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat11} className='lg:w-24 w-16 h-10 lg:h-16' alt=''></img>
                  </span>
                    <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat6} className='w-full h-full' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat12} className='lg:w-24 w-20 h-full' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat13} className='lg:w-20 w-16 h-full' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat7} className='w-full h-full' alt=''></img>
                  </span>
                </div>
                <div className='flex lg:hidden items-center lg:gap-8 gap-4'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat} className='lg:w-20 w-12 h-12 lg:h-20' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat2} className='lg:w-20 w-12 h-10 lg:h-16 mt-4' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat4} className='lg:w-20 w-12 h-4 lg:h-6' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat5} className='lg:w-20 w-12 h-6 lg:h-8' alt=''></img>
                  </span>
                </div>
                <div className='flex lg:hidden items-center lg:gap-8 gap-4'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat8} className='lg:w-full w-20 h-6 lg:h-8' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat9} className='lg:w-24 w-16 h-full ' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat10} className='lg:w-24 w-16 h-6 lg:h-8' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat3} className='lg:w-20 w-16 h-10 lg:h-16' alt=''></img>
                  </span>
                </div>
                <div className='flex lg:hidden items-center lg:gap-8 gap-4'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat11} className='lg:w-24 w-16 h-10 lg:h-16' alt=''></img>
                  </span>
                    <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat6} className='w-full h-full' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat12} className='lg:w-24 w-16 h-full' alt=''></img>
                  </span>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat13} className='lg:w-20 w-16 h-full' alt=''></img>
                  </span>
                </div>
                <div className='flex lg:hidden items-center lg:gap-8 gap-4'>
                  <span className='lg:w-28 lg:h-16 w-20 h-10 flex items-center justify-center'>
                    <img src={pat7} className='w-full h-full' alt=''></img>
                  </span>
                    
                </div>
                
            </span>
          </span>
      </div>
      <div>
        <span className='flex flex-col gap-2 lg:px-24 px-4 py-3 lg:py-6' id='report'>
          <span className='lg:text-2xl text-xl uppercase'>Explore our mnch resources</span>
          <span className='flex flex-col gap-3'>
            <span className='w-52 transition duration-300 relative' onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}><img className='w-full rounded' src={about4} alt=''></img>
              <div className={`absolute inset-0 bg-black rounded opacity-0 transition duration-300 ${isHovered2 ? 'opacity-50' : ''}`}></div>
                {isHovered2 && (
                  <div className="absolute inset-0 flex items-center font-semibold text-base justify-center text-white">
                      <a href={process.env.PUBLIC_URL + '/goalkeepers-report.pdf'} download><FaDownload size={30} className='opacity-80'/></a>
                  </div>
                )}
            </span>
            <span className='flex text-center text-lg lg:w-60 leading-none opacity-90'>Gates Foundation's 2023 Goalkeepers Report</span>
          </span>
        </span>
      </div>
      <Footer />
    </div>
  )
}




export default Mnch