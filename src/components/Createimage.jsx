import React from 'react';
import Create from '../assets/create1.png';
import Create2 from '../assets/create2.png';
import Create3 from '../assets/create3.png';

const Createimage = () => {
  return (
    <div className='flex w-screen items-center justify-center px-6 lg:pb-6'>
        <div className='flex lg:flex-row flex-col w-full lg:gap-6 gap-4 items-center justify-center'>
            <div className='flex'>
                <img src={Create} className='lg:h-[30rem] h-[20rem] w-[35rem] rounded-lg' alt=''></img>
            </div>
            <div className='flex flex-col gap-4'>
                <span>
                    <img src={Create2} className='lg:h-[15rem] h-[10rem] w-[35rem] rounded-lg' alt=''></img>
                </span>
                <span>
                    <img src={Create3} className='lg:h-[15rem] h-[10rem] w-[35rem] rounded-lg' alt=''></img>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Createimage;