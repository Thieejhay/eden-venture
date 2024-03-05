import React from 'react'
import Footerr from './Footerr';

const Register = () => {
  return (
    <div className='flex flex-col w-screen'>
        <div className='flex'>
            <span className='w-[35%] h-[27rem] bg-[#000000]'></span>
            <div className='w-[65%] flex flex-col p-12 '>
                <span className='flex flex-col gap-2'>
                    <span className='uppercase text-xl font-semibold'>registartion</span>
                    <hr className='w-full h-1 rounded bg-[#000000]'></hr>
                </span>
                <span className='flex justify-between pt-12'>
                    <span className='flex flex-col gap-1'>
                        <span className=' text-base font-medium'>Full Name</span>
                        <input className=" w-[20rem] h-8 rounded px-2 border border-[#000000] outline-none"></input>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <span className=' text-base font-medium'>Country</span>
                        <input className=" w-[20rem] h-8 rounded px-2 border border-[#000000] outline-none"></input>
                    </span>
                </span>
                <span className='flex justify-between pb-12 mt-12'>
                    <span className='flex flex-col gap-1'>
                        <span className=' text-base font-medium'>Email</span>
                        <input className=" w-[20rem] h-8 rounded px-2 border border-[#000000] outline-none"></input>
                    </span>
                    <span className='flex flex-col gap-1'>
                        <span className=' text-base font-medium'>Role</span>
                        <input className=" w-[20rem] h-8 rounded px-2 border border-[#000000] outline-none"></input>
                    </span>
                </span>
                <span className='flex justify-center mt-6'><input className= 'px-60 py-2 w-fit rounded  text-[#E2E7E9]/90 bg-[#6100c1]/80 uppercase text-xl font-semibold ' type='submit' value='register'></input></span>
            </div>
        </div>
        <Footerr />
    </div>
  )
}

export default Register;