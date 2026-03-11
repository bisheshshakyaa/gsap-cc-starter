import gsap from "gsap/src";
import { useGSAP } from "@gsap/react";

const Practice4 = () => {
  const timeLine = gsap.timeline({
    yoyo: true,
    repeatDelay: 1,
  });

  // GASP timeLine

  useGSAP(() => {
    timeLine.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeLine.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeLine.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div>
      <div className="mt-20 space-y-10">
        <button
          onClick={() => {
            if (timeLine.pause()) {
              timeLine.play();
            } else {
              timeLine.pause();
            }
          }}
        >
          Play/ Pause
        </button>
      </div>
      <div
        id="yellow-box"
        className="h-20 w-20 bg-yellow-400 rounded-lg mt-20"
      ></div>
    </div>
  );
};

export default Practice4;
