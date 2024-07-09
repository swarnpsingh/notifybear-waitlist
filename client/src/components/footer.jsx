import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
          <a href="https://tally.so/r/wvB6ad" target="_blank" rel="noopener noreferrer">
                <button className="text-xl text-black bg-white py-2 px-4 mt-10 rounded-lg cursor-pointer hover:bg-[#0056B3] hover:text-white">
                  Join Waitlist
                </button>
              </a>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <div>
            <h1 className=''>&copy; 2024 notifybear. All rights reserved.</h1>
        </div>
        <div className='flex sm:gap-6 gap-2'>
        <a href="https://www.instagram.com/notifybear.com_/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a href="https://x.com/notifybear" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a href="https://www.linkedin.com/company/103652407/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
            {/* <AiFillYoutube className='text-3xl cursor-pointer' /> */}
        </div>
    </div>
    </div>
  );
}

export default footer;
