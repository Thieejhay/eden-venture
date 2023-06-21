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

    const[mapInfo, setMapInfo] = useState(['']);
    const filter = (type) => {
        setMapInfo(MapData.filter((info)=>info.type === type))
    };

  return (
    <div className='flex flex-col'>
        <div className='flex gap-4 relative'>
            <div className='flex relative w-[50rem] h-[40rem]'>
                <ComposableMap className='absolute top-0'>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} fill="#DDD"
                            stroke="#FFF"
                            />
                            ))
                        }
                    </Geographies>
                    <Marker coordinates={[-84.386330, 33.753746]} style={{
                        default: {
                        fill: "#055594",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('atlanta')}>
                        <circle r={8}/>
                    </Marker>
                    <Marker coordinates={[7.491302, 9.072264]} style={{
                        default: {
                        fill: "#055594",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('abuja')}>
                        <circle r={8} />
                    </Marker>
                    <Marker coordinates={[3.406448, 6.465422]} style={{
                        default: {
                        fill: "#055594",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('lagos')}>
                        <circle r={8} />
                    </Marker>
                    <Marker coordinates={[-120.740135, 47.751076]} style={{
                        default: {
                        fill: "#055594",
                        },
                        hover: {
                        fill: "#0CB3A2",
                        },
                        }} className='cursor-pointer opacity-75' onClick={()=>filter('washington')}>
                        <circle r={8} />
                    </Marker>
                </ComposableMap>
            </div>
            <div ref={parent}>
                {
                    mapInfo.map((info, i) => (
                        <div key={i}>
                            <div>
                                <span>{info.location}</span>
                                <span>{info.title}</span>
                                <span>{info.mssg}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex w-screen h-12 bg-[#0CB3A2]'>

        </div>
    </div>
  )
}

export default Mapcreate;