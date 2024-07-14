import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './components/home.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Pages/Login.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import Terms from './Pages/Terms.jsx';
import { UserProvider } from './Pages/UserContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='privacy-policy' element={<PrivacyPolicy />} />
      <Route path='terms' element={<Terms />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
