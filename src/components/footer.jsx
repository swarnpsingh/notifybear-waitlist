import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";

function footer() {
  return (
    <div className="h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Join the Waitlist and be the first to test the app
          </h1>
          <p className="text-lg mt-2">
            We'll notify you about our progress through emails.
          </p>
          <button className="bg-white text-black hover py-2 px-4 rounded-lg text-lg mt-10">Join Waitlist</button>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <div>
            <h1 className=''>&copy; 2024 notifybear. All rights reserved.</h1>
        </div>
        <div className='flex gap-6'>
            <AiOutlineInstagram className='text-3xl cursor-pointer' />
            <AiOutlineTwitter className='text-3xl cursor-pointer' />
            <AiFillLinkedin className='text-3xl cursor-pointer' />
            <AiFillYoutube className='text-3xl cursor-pointer' />
        </div>
    </div>
    </div>
  );
}

export default footer;
