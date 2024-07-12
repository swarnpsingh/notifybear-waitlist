import React from 'react';
import Navbar from '../components/navbar';

function Terms() {
  return (
    <>
    <div className="min-h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col"> <Navbar />
    <div className='mt-10'>
                    <h1 className='font-bold text-2xl'>Terms and Conditions</h1>
                </div>
    <div className='flex flex-col gap-2 mt-4 leading-8' >
      <p>Last updated: July 12, 2024</p>
      <section>
        <h2 className='text-xl font-semibold'>Interpretation and Definitions</h2>
        <h3 className='text-lg font-semibold'>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. 
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className='text-lg font-semibold'>Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Notifybear, Patna, Bihar, India.
          </li>
          <li>
            <strong>Country</strong> refers to: India
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Notifybear, accessible from <a href="https://notifybear.com" target="_blank" rel="noopener noreferrer">https://notifybear.com</a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-semibold'>Acknowledgment</h2>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
          These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
          These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. 
          If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
          Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. 
          Please read Our Privacy Policy carefully before using Our Service.
        </p>
      </section>
      {/* Add more sections as needed */}
    </div>
    </div>
    </>
  );
};

export default Terms;
