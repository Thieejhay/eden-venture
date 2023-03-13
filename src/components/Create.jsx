import React from 'react';
import Counter from './Counter';
import ReactPlayer from 'react-player'


// https://drive.google.com/uc?export=download&id=1S9Bh2R5UakZiB7ISDwkANQ8fLVSEHS3m

const Create = () => {


  return (
    <div className='flex flex-col text-white lg:h-[65rem] w-screen bg-[#000000]/90 px-4 lg:px-0 h-[48rem]'>
        <span className='lg:text-5xl text-4xl font-medium text-[#E2E7E9]/90 flex justify-center lg:my-20 my-16'>WEECreateAfrica</span>
        <div className='flex justify-center'>
            <div className='lg:w-[52rem] h-[16rem] lg:h-[30rem] rounded-2x'>
                <ReactPlayer url='https://drive.google.com/uc?export=download&id=1ZPWG9-f-kBH595uCW5WqGhtngczPufcs' playing={true} loop={true} width='100%' height='100%'/>
            </div>
        </div>
        <span className='text-3xl font-medium text-[#E2E7E9]/90 flex justify-center mt-16 uppercase'>Impact</span>
        <div className='flex mt-8 lg:px-16 gap-3 lg:gap-0'>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={150} title='Events' duration={3} />
            </div>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={1000} title='People reached' duration={5} />
            </div>
            <div className='flex lg:basis-2/3 basis-1/3 justify-center'>
                <Counter target={200} title='Communities engaged with' duration={5} />
            </div>
        </div>
    </div>
  )
}

export default Create;