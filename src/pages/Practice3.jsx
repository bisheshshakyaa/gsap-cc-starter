import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Practice3 = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#purple-box",
      {
        x: 50,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        y: 250,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.inOut",
      },
    );
  }, []);

  return (
    <div>
      <div
        id="purple-box"
        className="h-20 w-20 bg-purple-300 rounded-xl mt-20"
      ></div>
    </div>
  );
};

export default Practice3;
