import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin
} from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import icon from '../assets/icon-mascot.png';
import { Link } from "react-router-dom";
import { useUser } from '../Pages/UserContext';
import "../App.css";

function Navbar() {
  const { userData } = useUser();

  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <Link to="/">
        <div className='flex justify-center items-center gap-2 sm:gap-4'>
          <img src={icon} alt="icon" className='w-10' />
          <h1 className='font-bold text-xl'>notifybear</h1>
        </div></Link>
        <div className='flex items-center sm:gap-6 gap-2'>
          <a href="https://www.instagram.com/notifybear.com_/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a href="https://x.com/notifybear" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className='text-2xl sm:text-3xl cursor-pointer' />
          </a>
          <a className='mr-5' href="https://www.linkedin.com/company/103652407/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='text-2xl sm:text-3xl cursor-pointer' />
          </a>

          <div>
            {userData ? (
              <Link to="/profile">
                <div className='border-2 py-2 px-4 rounded-[50%]'>1</div>
              </Link>
            ) : (
              <Link to="/login">
                <button className="cursor-pointer bg-[#0056B3] hover:bg-white hover:text-black py-2 px-4 rounded-lg textlgl">Sign In As Creator</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
