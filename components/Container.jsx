import React, { useRef, useEffect } from "react";
import gsap from "gsap";

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

const Container = () => {
  const ref = useRef();
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      console.log(el.offsetWidth * 4);
      gsap.to(el, {
        xPercent: -100 * (5 - 1),
        ease: "none",
        duration: 1,
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          pin: true,
          pinSpacing: false,
          scrub: 1,
          snap: 1 / (5 - 1),
          start: "top top",
          end: () => `+=${4 * el.offsetWidth}`,
          markers: true,
        },
      });
    });
  }, []);
  return sections.map(({ title }) => (
    <div className="container" ref={addToRefs}>
      {title}
    </div>
  ));
};

export default Container;
