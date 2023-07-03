import React from 'react';
import { BsDot } from 'react-icons/bs';

const Creators = () => {
  return (
    <div className='flex relative bg-gray-200/20 py-12 lg:py-32 px-6 w-screen font-barlow'>
        <div className='flex w-full h-[42rem] lg:h-[30rem]'>
            <div className='flex flex-col lg:w-[30%] w-[50%] bg-[#055594] rounded-l-2xl items-center justify-center'>
                <span className='lg:text-4xl text-xl font-black text-[#ffffff] lg:tracking-wide'>#WEECreateAfrica</span>
                <span className='lg:text-lg text-base font-medium text-[#ffffff] lg:tracking-wide lg:w-[80%] ml-3 lg:ml-0'>Women Economic Empowerment x Creators</span>
            </div>
            <div className='flex flex-col space-y-4 lg:w-[70%] w-[50%] bg-gray-400/20 rounded-r-2xl lg:px-4 px-1 justify-center'>
                <span className='flex lg:gap-3 gap-1'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='lg:text-lg text-xs font-normal'>We reconginze the indomitable spirit and immense contributions of women of African decent in the cultural and business communites worldwide</span>
                </span>
                <span className='flex lg:gap-3 gap-1'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='lg:text-lg text-xs font-normal'>However, the journey of towards social and economic parity is an ongoing struggle.</span>
                </span>
                <span className='flex lg:gap-3 gap-1'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='lg:text-lg text-xs font-normal'>Despite the prevalence of inequalites emerging women leaders from this demographic continue to inspire and lead across various domain</span>
                </span>
                <span className='flex lg:gap-3 gap-1'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='lg:text-lg text-xs font-normal'>Our mission is to shine a spotlight on the far reaching negaative consequences of these disparities on individuals of all genders spanning socioeconomic backgrounds</span>
                </span>
                <span className='flex lg:gap-3 gap-1'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='lg:text-lg text-xs font-normal'>By fostering collaborations, we strive to generate innovative solutions that challenge outdated mindsets and shape more inclusive and prosperous future for our global community </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Creators;