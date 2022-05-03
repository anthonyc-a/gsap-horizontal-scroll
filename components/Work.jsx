import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".work", {
      duration: 2,
      ease: "power3",
      opacity: 1,
      scrollTrigger: {
        trigger: ".work",
        start: "top center",
        markers: true,
      },
    });
  }, []);
  return (
    <div className="work container">
      <div>work</div>
    </div>
  );
};

export default Work;
