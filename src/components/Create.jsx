import React from 'react';
import Counter from './Counter';
import Wee from '../assets/WEE.gif'


const Create = () => {


  return (
    <div className='flex flex-col text-white lg:h-[65rem] w-screen bg-[#000000]/90 px-4 lg:px-0 h-[48rem] font-barlow'>
        <span className='lg:text-5xl text-4xl font-medium text-[#E2E7E9]/90 flex justify-center lg:my-20 my-16 items-center text-center'>SOW presents WEECreateAfrica</span>
        <div className='flex justify-center'>
            <div className=''>
                <img  src={Wee} alt='' className='lg:w-[52rem] h-[16rem] lg:h-[30rem] box-border rounded-2xl flex'/>
            </div>
        </div>
        <span className='text-3xl font-medium text-[#E2E7E9]/90 flex justify-center mt-16 uppercase'>Impact</span>
        <div className='flex mt-8 lg:px-16 gap-3 lg:gap-0'>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={55} title='Events' duration={3} />
            </div>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={20000000} title='People reached' duration={7} />
            </div>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={120} title='Communities engaged' duration={5} />
            </div>
        </div>
    </div>
  )
}

export default Create;