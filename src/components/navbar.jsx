import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import icon from '../assets/icon-mascot.png';

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <div className='flex justify-center items-center gap-2 sm:gap-4'>
          <img src={icon} alt="icon" className='w-10'/>
          <h1 className='font-bold text-xl'>notifybear</h1>
        </div>
        <div className='flex sm:gap-6 gap-2'>
          <a href="https://www.instagram.com/notifybear.com_/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a href="https://www.linkedin.com/company/103652407/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube className='text-2xl sm:text-3xl cursor-pointer' />
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
