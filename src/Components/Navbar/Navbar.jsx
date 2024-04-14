import React from 'react'
import profilePic from '../../assets/images (7).jpeg'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div className='h-20 w-full flex items-end px-8 gap-1 fixed z-20'>
        <div className='h-14 w-16 bg-[#a0de36] rounded-[50px] flex items-center justify-center' >
          <div className='mb-4' id='four-pointed-star'></div>
        </div>
        <div className='h-14  w-[90%] bg-[#4d4d4dbb] rounded-[50px] flex items-center justify-center gap-4 text-white backdrop-blur-sm' >
            <h1 className='font-zenKaku font-semibold text-2xl'>VZRDS</h1>
            <div className='h-2 w-2 bg-[#a0de36] rounded-2xl mt-1'></div>
            <h1 className='font-zenKaku font-light '>AI For EveryOne</h1>
        </div>
        <div className='h-14 w-40 bg-[#4d4d4dbb] rounded-[50px] flex items-center justify-between px-2 backdrop-blur-sm'>
            <h1 className='font-zenKaku font-semibold ml-4 text-white'>Login</h1>
            <div className='h-[82%] w-12 bg-black rounded-3xl overflow-hidden'>
                <img src={profilePic} alt="" className='object-cover ' />
            </div>
        </div>

    </div>
  )
}

export default Navbar