import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Container from "../components/Container";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="App">
      <div className="page-container">
          <Container />
        
      </div>
    </div>
  );
};

export default App;
