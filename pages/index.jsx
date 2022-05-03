import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

const App = () => {
  const ref = useRef();
  console.log(ref.current);
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
        xPercent: -100 * (5 - 1),
        ease: "none",
        duration: 6,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          pin: true,
          scrub: 0.5,
          snap: 1 / (5 - 1),
          end: `+=${ref.current.offsetWidth / 2 + ref.current.offsetHeight}`,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="page-container" ref={ref}>
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
