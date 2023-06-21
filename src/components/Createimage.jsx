import React from 'react';
import Create from '../assets/create1.png';
import Create2 from '../assets/create2.png';
import Create3 from '../assets/create3.png';

const Createimage = () => {
  return (
    <div className='flex w-screen h-[35rem] items-center justify-center'>
        <div className='flex w-full gap-6 items-center justify-center'>
            <div className='flex'>
                <img src={Create} className='h-[30rem] w-[35rem] rounded-lg' alt=''></img>
            </div>
            <div className='flex flex-col gap-4'>
                <span>
                    <img src={Create2} className='h-[15rem] w-[35rem] rounded-lg' alt=''></img>
                </span>
                <span>
                    <img src={Create3} className='h-[15rem] w-[35rem] rounded-lg' alt=''></img>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Createimage;