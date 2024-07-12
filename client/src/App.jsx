import "./App.css";
import Home from "./components/home";

import Blob from "./components/blobs"
import { Analytics } from "@vercel/analytics/react"
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="relative flex flex-col bg-[#121212] w-full overflow-hidden">
        <ToastContainer/>
        <Outlet/>
        {/* <Blob /> */}
        <Analytics />
        
      </div>
    </>
  );
}

export default App;
