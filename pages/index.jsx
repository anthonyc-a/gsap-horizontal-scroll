import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
];

const App = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.to(el, {
        xPercent: -100 * (3 - 1),
        ease: "none",
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          pin: true,
          scrub: 1,
          snap: 1 / (3 - 1),
          end: () => "+=" + 1000,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="page-container">
        {sections.map(({ title, subtitle }) => (
          <div className="container" key={title} ref={addToRefs}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
