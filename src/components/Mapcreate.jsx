import React from 'react';
import { useState, useRef, useEffect, } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { MapData } from './data4';
import autoAnimate from '@formkit/auto-animate'

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
        <div className='flex flex-col relative'>
            <div className='flex relative justify-center items-center'>
                <ComposableMap className='flex w-[40rem] -mt-12'>
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
            <div className='flex w-screen h-12 bg-[#0CB3A2] items-center justify-center -mt-12'>
                <span className='flex items-center justify-center text-xs lg:text-xl lg:font-bold font-medium lg:tracking-wider text-[#ffffff]'>click the dots to see some lessons learned at the location</span>
            </div>
            <div ref={parent}>
                {
                    mapInfo.map((info, i) => (
                        <div key={i} className='pt-6 lg:pb-12 pb-6 bg-gray-400/20'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <span className='text-3xl font-extrabold text-[#055594]'>{info.location}</span>
                                <img src={info.url} alt='' className='lg:h-[28rem] h-[15rem] w-[22rem] lg:w-[60rem] rounded'></img>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Mapcreate;