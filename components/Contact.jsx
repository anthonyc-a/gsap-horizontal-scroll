import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.to(".contact", {
      duration: 2,
      ease: "power3",
      opacity: 1,
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
        markers: true,
      },
    });
  }, []);
  return <div className="contact container">Contact</div>;
};

export default Contact;
