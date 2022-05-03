import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".hero", {
      duration: 2,
      ease: "power3",
      opacity: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        markers: true,
      },
    });
  }, []);

  return (
    <div className="container hero">
      <div>hero</div>
    </div>
  );
};

export default Hero;
