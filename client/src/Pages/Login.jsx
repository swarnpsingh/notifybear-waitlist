import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import GoogleButton from 'react-google-button';
import { useUser } from '../Pages/UserContext';
import "../App.css";

function navigate(url) {
  window.location.href = url;
}

async function auth() {
  const response = await fetch("http://127.0.0.1:3000/request", {
    method: "post",
  }).then((response) => response.json());
  navigate(response.url);
}

function Login() {
  const { fetchUserData } = useUser();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      <div className="min-h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col">
        <Navbar />
        <div className="relative flex-grow flex items-center justify-center text-center z-10">
          <div className="min-h-52 min-w-96 px-4 py-4 rounded-lg bg-slate-600 flex flex-col items-center gap-4 text-center">
            <p className="text-xl font-bold mb-5">Sign In As A Creator</p>
            <GoogleButton onClick={auth} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
