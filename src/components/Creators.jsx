import React from 'react';
import { BsDot } from 'react-icons/bs';

const Creators = () => {
  return (
    <div className='flex relative bg-gray-200/20 py-24 px-12 w-screen h-[40rem] font-barlow'>
        <div className='flex w-full'>
            <div className='flex flex-col w-[30%] bg-[#055594] rounded-l-2xl items-center justify-center'>
                <span className='text-4xl font-black text-[#ffffff] tracking-wide'>#WEECreateAfrica</span>
                <span className='text-lg font-medium text-[#ffffff] tracking-wide w-[80%]'>Women Economic Empowerment x Creators</span>
            </div>
            <div className='flex flex-col space-y-4 w-[70%] bg-gray-400/20 rounded-r-2xl px-4 justify-center'>
                <span className='flex gap-3'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-lg font-normal'>We reconginze the indomitable spirit and immense contributions of women of African decent in the cultural and business communites worldwide</span>
                </span>
                <span className='flex gap-3'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-lg font-normal'>However, the journey of towards social and economic parity is an ongoing struggle.</span>
                </span>
                <span className='flex gap-3'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-lg font-normal'>Despite the prevalence of inequalites emerging women leaders from this demographic continue to inspire and lead across various domain</span>
                </span>
                <span className='flex gap-3'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-lg font-normal'>Our mission is to shine a spotlight on the far reaching negaative consequences of these disparities on individuals of all genders spanning socioeconomic backgrounds</span>
                </span>
                <span className='flex gap-3'>
                    <span><BsDot className='text-[#0CB3A2] w-6 h-6'/></span>
                    <span className='text-lg font-normal'>By fostering collaborations, we strive to generate innovative solutions that challenge outdated mindsets and shape more inclusive and prosperous future for our global community </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Creators;