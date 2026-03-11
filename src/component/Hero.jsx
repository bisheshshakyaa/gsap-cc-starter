import HeroImage from "../img/hero.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#Title", {
      ease: "back.inOut",
      opacity: 1,
      y: 0,
      duration: 2,
    });
  }, []);
  return (
    <div className="relative flex justify-center align-middle flex-col min-h-screen pb-24 overflow-hidden">
      {/* --- BACKGROUND SVG WRAPPER --- */}
      {/* Positioned at the bottom, full width, behind all content (z-[-1]) */}
      <div className="absolute bottom-0 left-0 w-full z-[-1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          {/* Note: fill-opacity changed to fillOpacity for React */}
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,32L26.7,32C53.3,32,107,32,160,80C213.3,128,267,224,320,240C373.3,256,427,192,480,176C533.3,160,587,192,640,197.3C693.3,203,747,181,800,154.7C853.3,128,907,96,960,74.7C1013.3,53,1067,43,1120,37.3C1173.3,32,1227,32,1280,32C1333.3,32,1387,32,1413,32L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center align-middle flex-col ">
        <div className="flex justify-center">
          <h1
            id="Title"
            className="text-6xl text-center opacity-0 translate-y-15"
          >
            Grow your{" "}
            <span className="text-blue-600 font-sans text-[6.5rem] ">
              Business {}
            </span>
            with
            <br />
            Digital Marketing
          </h1>
        </div>

        {/*Section */}

        <div className="flex justify-center mt-10">
          <p className="flex justify-center">
            Get {}
            <span className="text-blue-600 font-sans text-[1.2rem] font-medium">
              &quot;Free Guidelines &quot;
            </span>{" "}
            {}
            to {}
            <span className="text-blue-600 font-sans text-[1.2rem] font-medium">
              &quot;Grow your Business &quot;
            </span>
          </p>
        </div>

        {/* Image Section */}

        <div className="flex justify-evenly">
          <img
            src={HeroImage}
            className="h-[10%] w-[20%] mt-[5%] rounded-md "
          ></img>
          <img
            src={HeroImage}
            className="h-[10%] w-[20%] mt-[5%] rounded-md"
          ></img>
        </div>

        {/* Button Section */}
        <div className="flex justify-end mt-[5%] mr-[5%]">
          <button className="bg-blue-800 p-3 text-white font-medium rounded-lg">
            Click here for free trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
