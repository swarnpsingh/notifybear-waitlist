import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Blob from "./components/blobs"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <div className="relative flex flex-col bg-[#121212] w-full overflow-hidden">
        <Blob />
        <Home />
        <About />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;
