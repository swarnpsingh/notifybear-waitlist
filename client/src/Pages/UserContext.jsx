import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch("https://notifybear-waitlist.onrender.com/oauth/user", {
      method: "get",
    });
    const data = await response.json();

    const subscriberCount = Number(data.channelData.statistics.subscriberCount);
    if (subscriberCount <= 100000) {
      setUserData(null);
      toast.error("Subscriber count less than 100K", {
        className: 'custom-toast-error'
      });
    } else {
      setUserData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
