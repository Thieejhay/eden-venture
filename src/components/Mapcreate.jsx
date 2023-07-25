import React from 'react';
import { useState, useRef, useEffect, } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapData } from './data4';
import autoAnimate from '@formkit/auto-animate';
import {AiOutlineClose} from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Mapcreate = () => {

    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
      }, [parent])

    const[mapInfo, setMapInfo] = useState([]);
    const filter = (type) => {
        setMapInfo(MapData.filter((info)=>info.type === type))
    };

  return (
    <div className='flex flex-col'>
        <div className='flex w-screen h-16 bg-[#055594] items-center justify-center lg:-mt-12'>
            <span className='flex items-center justify-center text-xs lg:text-2xl lg:font-bold font-medium lg:tracking-wider text-[#ffffff] uppercase'>WCA community around the world</span>
        </div>
        <div className='flex flex-col relative'>
            <div className='flex relative justify-center items-center'>
                <ComposableMap className='flex w-[52rem] lg:-mt-12'>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill="#055594"
                            stroke="#FFF" opacity={0.8}
                            />
                            ))
                        }
                    </Geographies>
                    <Marker coordinates={[-84.386330, 33.753746]} style={{
                        default: {
                        fill: "#0CB3A2",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('atlanta')}>
                        <circle r={8}/>
                    </Marker>
                    <Marker coordinates={[7.491302, 9.072264]} style={{
                        default: {
                        fill: "#0CB3A2",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('abuja')}>
                        <circle r={8} />
                    </Marker>
                    {/* <Marker coordinates={[3.406448, 6.465422]} style={{
                        default: {
                        fill: "#055594",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('lagos')}>
                        <circle r={8} />
                    </Marker> */}
                    <Marker coordinates={[-120.740135, 47.751076]} style={{
                        default: {
                        fill: "#0CB3A2",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('washington')}>
                        <circle r={8} />
                    </Marker>
                </ComposableMap>
            </div>
            <div className='flex w-screen h-12 bg-[#0CB3A2] items-center justify-center lg:-mt-12'>
                <span className='flex items-center justify-center text-xs lg:text-xl lg:font-bold font-medium lg:tracking-wider text-[#ffffff]'>click the dots to see some lessons learned at the location</span>
            </div>
            
                {
                    mapInfo.map((info, i) => (
                       <div className='flex absolute z-10 w-screen h-screen bg-[#000000]/50 flex-col pt-8 px-20'>
                        <span className='flex justify-end'><AiOutlineClose className='w-10 h-10 text-white/60' onClick={()=>filter('')} /></span>
                        <div>
                        <Swiper
                            breakpoints={{
                            640: {slidesPerView: 1},
                            0: {slidesPerView: 1}
                            }}
                            modules={[Pagination, Navigation]}
                            navigation={{
                            nextEl: '.image-swiper-button-next',
                            prevEl: '.image-swiper-button-prev',
                            disabledClass: 'swiper-button-disabled'
                            }}
        
                            slidesPerView={1}
                            loop={true} 
                            className='lg:w-[70%] w-[80%] h-[19rem] mySwiper mt-16'>
                                <SwiperSlide className='flex flex-col relative overflow-hidden box-border' key={i}>
                                    <div className='flex'><img src={info.url} alt='' className='lg:h-[19rem] h-[15rem] w-[22rem] lg:w-[30rem] rounded'/></div>
                                </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className='absolute cursor-pointer z-10 flex lg:right-32 right-0 lg:top-[50%] top-[40%] image-swiper-button-next'>
                        <IoIosArrowForward size={50} className='text-[#6100c1]'/>
                        </div>
                        <div className='absolute cursor-pointer z-10 flex lg:left-32 left-0 lg:top-[50%] top-[40%] image-swiper-button-prev'>
                        <IoIosArrowBack size={50} className='text-[#6100c1]'/>
                        </div>
                         {/* <div key={i} className='pt-6 lg:pb-12 pb-6 bg-gray-400/20'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <span className='text-3xl font-extrabold text-[#055594]'>{info.location}</span>
                                <img src={info.url} alt='' className='lg:h-[28rem] h-[15rem] w-[22rem] lg:w-[60rem] rounded'></img>
                            </div>
                        </div> */}
                       </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Mapcreate;