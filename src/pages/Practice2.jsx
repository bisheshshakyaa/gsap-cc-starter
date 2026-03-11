import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Practice2 = () => {
  useGSAP(() => {
    gsap.from("#red-box", {
      x: 500,
      yoyo: true,
      rotation: 500,
      duration: 2,
      ease: "bounce.in",
    });
  }, []);

  return (
    <div>
      <div
        id="red-box"
        className="h-20 w-20 bg-red-700 rounded-full mt-20"
      ></div>
    </div>
  );
};

export default Practice2;
