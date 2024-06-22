import React from "react";
import Navbar from "./navbar";
import comingSoon from "../assets/coming1.svg";
import blob from "../assets/image1.svg";
import About from "./about";

function Home() {
  return (
    <>
      <div className="min-h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col">
        <Navbar />
        <div className="relative flex-grow flex flex-col items-center justify-center z-10 text-center">
          <div>
            <img src={comingSoon} alt="Coming Soon" className="img" />
          </div>
          <div>
            <h1 className="font-regular text-3xl my-6 text-white">
              From Every Screen To Your Pocket.
            </h1>
          </div>
          <div className="flex items-center rounded-lg text-lg cursor-pointer">
            <p className="bg-white text-black hover py-2 px-4 rounded-lg">
              Join Waitlist
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Home;
