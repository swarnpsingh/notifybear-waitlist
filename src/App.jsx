import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Blob from "./components/blobs"

function App() {
  return (
    <>
      <div className="relative flex flex-col bg-[#121212] w-full overflow-hidden">
        <Blob />
        <Home />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
