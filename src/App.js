import React, { useRef, useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  const moonAnim = useWebAnimations({
    keyframes: [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' },
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
      delay: 0,
      easing: "linear",
    }
  });


  return (
    <div >
      <div className="moon" ref={moonAnim.ref}></div>

    </div>
  );
}

export default App;
