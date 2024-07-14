import React from 'react';
import mockup from '../assets/mockup.png';
import text from '../assets/text.svg';
import first from '../assets/first.svg';
import second from '../assets/second.svg';
import third from '../assets/third.svg';
import fourth from '../assets/fourth.svg';

function About() {
  return (
    <>
      <div className="px-4 py-2 sm:px-16 sm:py-12 flex sm:flex-row flex-col gap-6 w-full justify-center z-[10] text-white">
        <div className="w-full sm:w-auto sm:flex-none mx-auto">
          <img src={mockup} alt="mockup" className='w-3/4 sm:w-auto mx-auto' />
        </div>
        <div className='sm:w-1/2 sm:mt-0 mt-6'>
          <div>
            <img src={text} alt="text" />
          </div>
          <div className='pt-12 flex gap-6'>
            <div className='flex items-start gap-6'>
              <img src={first} alt="first feature" className='w-[20%]'/>
              <h1 className='text-xl'><b>Unified Notification System:</b> notifybear consolidates updates from your favorite creators across all social media platforms into a single, streamlined interface.</h1>
            </div>
          </div>
          <div className='pt-12 flex gap-6'>
            <div className='flex items-start gap-6'>
              <img src={second} alt="second feature" className='w-[20%]'/>
              <h1 className='text-xl'><b>Personalized Alerts:</b> Leveraging smart algorithms, notifybear tailors notifications based on your content consumption habits, ensuring you only receive updates that matter to you.</h1>
            </div>
          </div>
          <div className='pt-12 flex gap-6'>
            <div className='flex items-start gap-6'>
              <img src={third} alt="third feature" className='w-[20%]'/>
              <h1 className='text-xl'><b>Cross-Platform Integration:</b> Whether it's a YouTube video, an Instagram story, a tweet, or a live stream, notifybear keeps you in the loop, so you never miss a moment from your favorite creators.</h1>
            </div>
          </div>
          <div className='pt-12 flex gap-6'>
            <div className='flex items-start gap-6'>
              <img src={fourth} alt="fourth feature" className='w-[20%]'/>
              <h1 className='text-xl'><b>Customizable Experience:</b> notifybear offers user-centric customization options, allowing you to control which notifications you receive and how you receive them, enhancing your social media experience.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
