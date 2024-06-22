import React from 'react';
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillYoutube
} from "react-icons/ai";
import icon from '../assets/icon-mascot.png'

function Navbar() {
  return (
    <>
    <div className='w-full flex justify-between items-center'>
        <div className='flex justify-center items-center gap-4'>
            <img src={icon} alt="" className='w-10'/>
            <h1 className='font-bold text-xl'>notifybear</h1>
        </div>
        <div className='flex gap-6'>
            <AiOutlineInstagram className='text-2xl sm:text-3xl cursor-pointer' />
            <AiOutlineTwitter className='text-2xl sm:text-3xl cursor-pointer' />
            <AiFillLinkedin className='text-2xl sm:text-3xl cursor-pointer' />
            <AiFillYoutube className='text-2xl sm:text-3xl cursor-pointer' />
        </div>
    </div>
    </>
  )
}

export default Navbar;
