import React, { useEffect } from "react";
import Navbar from "./navbar";
import comingSoon from "../assets/coming1.svg";
import About from "./about";
import Footer from "./footer";
import { useUser } from "../Pages/UserContext";
import Blob from "./blobs.jsx"

function Home() {
  const { fetchUserData } = useUser();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
    <Blob />
      <div className="min-h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col text-white">
        <Navbar />
        <div className="relative flex-grow flex flex-col items-center justify-center text-center z-10">
          <div className="flex flex-col items-center">
            <div>
              <img src={comingSoon} alt="Coming Soon" className="img" />
            </div>
            <div>
              <h1 className="font-regular text-3xl my-6 text-white">
                From Every Screen To Your Pocket.
              </h1>
            </div>
            <div className="z-20">
              <a href="https://tally.so/r/wvB6ad" target="_blank" rel="noopener noreferrer">
                <button className="text-xl text-black bg-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#0056B3] hover:text-white">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}

export default Home;