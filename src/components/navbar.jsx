import React from 'react';
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillYoutube
} from "react-icons/ai";

function Navbar() {
  return (
    <>
    <div className='w-full flex justify-between items-center'>
        <div>
            <h1 className='font-bold text-xl'>notifybear</h1>
        </div>
        <div className='flex gap-6'>
            <AiOutlineInstagram className='text-3xl cursor-pointer' />
            <AiOutlineTwitter className='text-3xl cursor-pointer' />
            <AiFillLinkedin className='text-3xl cursor-pointer' />
            <AiFillYoutube className='text-3xl cursor-pointer' />
        </div>
    </div>
    </>
  )
}

export default Navbar;
