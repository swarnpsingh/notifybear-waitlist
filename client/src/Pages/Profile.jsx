import { useState, useEffect } from "react";
import "../App.css";
import Navbar from '../components/navbar';


async function fetchUserData() {
  const response = await fetch("http://127.0.0.1:3000/oauth/user", {
    method: "get",
  }).then(response => response.json());

  return response;
}

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchUserData();
      setUserData(data);
    }
    getData();
  }, []);

  return (
    <div>
      {userData ? (
        <div className="min-h-screen w-full px-8 py-6 sm:px-16 sm:py-12 flex flex-col">
        <Navbar />
        <div className="relative flex-grow flex flex-col items-center justify-center text-center z-10">
          <h1>Welcome, {userData.name}</h1>
          <h2>Your YouTube Channel</h2>
          <p>Title: {userData.channelData.snippet.title}</p>
          <p>Description: {userData.channelData.snippet.description}</p>
          <p>Subscribers: {userData.channelData.statistics.subscriberCount}</p>
          <p>Views: {userData.channelData.statistics.viewCount}</p>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
