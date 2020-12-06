//import React, { useRef, useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';

function App() {
  // const element = useRef(null);
  // useEffect(() => {
  //   element.current.focus();
  // }, []);
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(600px,0)" },
    ],
    timing: {
      //delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat forever
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  return (
    <div >
      {/* input box
      <input ref={element} type='text'></input> */}
      < div className='target' ref={ref}></div >
      Current animation state: {playState} {``}
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div >
  );
}

export default App;
