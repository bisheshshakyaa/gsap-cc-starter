import { useGSAP } from "@gsap/react"; // Import for using hooks of GSAP
import gsap from "gsap"; // Import GASP

const Practice1 = () => {
  useGSAP(() => {
    // Similar to useEffect but in this we first state gasp and which method we want to use. Then we give it a identifier after that in an object we give properties for it.
    gsap.to("#blue-box", {
      x: 500,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: "bounce.in",
    });
  });

  return (
    <div>
      <div
        id="blue-box"
        className="w-20 h-20 bg-blue-500 rounded-lg mt-20"
      ></div>
    </div>
  );
};

export default Practice1;
