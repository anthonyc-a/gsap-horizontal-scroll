import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".about", {
      duration: 2,
      ease: "power3",
      opacity: 1,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        markers: true,
      },
    });
  }, []);

  return (
    <div className="about container">
      <div>About</div>
    </div>
  );
};

export default About;
