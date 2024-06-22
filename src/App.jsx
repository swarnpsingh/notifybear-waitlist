import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="relative flex flex-col bg-[#121212] w-full z-[-2] overflow-hidden">
        {/* <Navbar /> */}
        <div className="absolute sm:w-4/6 w-full sm:top-44 top-44 sm:left-[-300px] left-[-200px] z-[-1]">
          <svg
            className="blur-[100px] sm:blur-[150px]"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="c">
                <stop offset="0%" stopColor="#4C00FF" />
                <stop offset="50%" stopColor="#00BFFF" />
                <stop offset="100%" stopColor="#FF69B4" />
              </linearGradient>
              <clipPath id="b">
                <path
                  fill="currentColor"
                  d="M838.5 672.5Q699 845 507.5 832T214 659.5q-102-159.5-23-359T473.5 147q203.5 46 354 199.5t11 326Z"
                />
              </clipPath>
              <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
                <feFlood floodColor="#fff" result="neutral-gray" />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2.5"
                  numOctaves="100"
                  stitchTiles="stitch"
                  result="noise"
                />
                <feColorMatrix
                  in="noise"
                  type="saturate"
                  values="0"
                  result="destaturatedNoise"
                />
                <feComponentTransfer in="desaturatedNoise" result="theNoise">
                  <feFuncA type="table" tableValues="0 0 0.05 0" />
                </feComponentTransfer>
                <feBlend
                  in="SourceGraphic"
                  in2="theNoise"
                  mode="soft-light"
                  result="noisy-image"
                />
              </filter>
            </defs>
            <g filter="url(#a)" clipPath="url(#b)">
              <path
                fill="url(#c)"
                d="M838.5 672.5Q699 845 507.5 832T214 659.5q-102-159.5-23-359T473.5 147q203.5 46 354 199.5t11 326Z"
              />
            </g>
          </svg>
        </div>
        <div className="absolute sm:w-4/6 w-full sm:top-[1000px] top-[2100px] sm:right-[-350px] right-[-150px] z-[-1] rotate-180">
          <svg
            className="blur-[80px] sm:blur-[150px]"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="c">
                <stop offset="0%" stopColor="#FF69B4" />
                <stop offset="50%" stopColor="#00BFFF" />
                <stop offset="100%" stopColor="#4C00FF" />
              </linearGradient>
              <clipPath id="b">
                <path
                  fill="currentColor"
                  d="M795 632Q653 764 499 766T180 634Q15 500 143.5 302t353-191Q721 118 829 309t-34 323Z"
                />
              </clipPath>
              <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
                <feFlood floodColor="#fff" result="neutral-gray" />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2.5"
                  numOctaves="100"
                  stitchTiles="stitch"
                  result="noise"
                />
                <feColorMatrix
                  in="noise"
                  type="saturate"
                  values="0"
                  result="destaturatedNoise"
                />
                <feComponentTransfer in="desaturatedNoise" result="theNoise">
                  <feFuncA type="table" tableValues="0 0 0.05 0" />
                </feComponentTransfer>
                <feBlend
                  in="SourceGraphic"
                  in2="theNoise"
                  mode="soft-light"
                  result="noisy-image"
                />
              </filter>
            </defs>
            <g filter="url(#a)" clipPath="url(#b)">
              <path
                fill="url(#c)"
                d="M795 632Q653 764 499 766T180 634Q15 500 143.5 302t353-191Q721 118 829 309t-34 323Z"
              />
            </g>
          </svg>
        </div>
        <Home />
        <About className="relative z-10" />
        <Footer />
      </div>
    </>
  );
}

export default App;
