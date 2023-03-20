import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {swiper} from './data1';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import { FaLinkedinIn} from 'react-icons/fa';

const Partner = () => {
  return (
    <div className='relative py-24 bg-[#000000]/90 lg:h-[33rem] h-[28rem] font-barlow'>
        <div className='lg:text-5xl text-3xl font-semibold lg:font-bold top-12 absolute lg:left-[50%] left-[40%] -translate-x-1/3 tracking-tight uppercase text-[#E2E7E9]/90'>Our Community</div>
        <div className='absolute cursor-pointer z-10 lg:right-24 right-0 lg:top-[60%] top-[40%] image-swiper-button-next'>
            <IoIosArrowForward size={50} className='text-[#6100c1]/80'/>
        </div>
        <div className='absolute cursor-pointer z-10 lg:left-24 left-0 lg:top-[60%] top-[40%] image-swiper-button-prev'>
            <IoIosArrowBack size={50} className='text-[#6100c1]/80'/>
        </div>
        <Swiper
        breakpoints={{
            640: {slidesPerView: 3},
            0: {slidesPerView: 3}
        }}
        modules={[Pagination, Navigation]}
        navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
        }}
        
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true} className='lg:w-[70%] w-[80%] h-[21rem] mySwiper mt-16'>
            { swiper.map((swiper, i) => (
                <SwiperSlide className='flex flex-col relative overflow-hidden box-border' key={i}>
                    <div className='flex'><img src={swiper.img} alt='' className='w-full lg:h-60 h-24 rounded-3xl box-border'/></div>
                    <div className='flex flex-col mt-4'>
                        <span className='lg:text-lg text-base  font-lightlg:font-normal text-[#E2E7E9]/90 uppercase'>{swiper.name}</span>
                        <span className='flex flex-col gap-2'>
                            <span className='text-sm font-extralight text-[#E2E7E9]/50 uppercase'>{swiper.title}</span>
                            <a href={swiper.linkdn} target='_blank' rel='noreferrer'><FaLinkedinIn className='lg:w-4 w-4 h-4 lg:h-6 text-[#E2E7E9]/90'/></a>
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Partner