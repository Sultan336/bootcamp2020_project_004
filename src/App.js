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

  const bg = useRef();
  const bgAnim = useWebAnimations({
    bg,
    keyframes: [
      { backgroundPosition: '50% 50%' },
      { backgroundPosition: '100% 100%' },
      { backgroundPosition: '50% 50%' },
    ],
    timing: {
      duration: 60000,
      iterations: Infinity,
      easing: "linear",
    }
  });

  const wheel1Anim = useWebAnimations({
    keyframes: [
      { transform: 'rotate(0deg' },
      { transform: 'rotate(360deg' },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
    }
  });

  const wheel2Anim = useWebAnimations({
    keyframes: [
      { transform: 'rotate(0deg' },
      { transform: 'rotate(360deg' },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
    }
  });

  function speedUp() {

    moonAnim.getAnimation().updatePlaybackRate(moonAnim.getAnimation().playbackRate * 1.15);
    bgAnim.getAnimation().updatePlaybackRate(bgAnim.getAnimation().playbackRate * 1.15);
    wheel1Anim.getAnimation().updatePlaybackRate(wheel1Anim.getAnimation().playbackRate * 1.15);
    wheel2Anim.getAnimation().updatePlaybackRate(wheel2Anim.getAnimation().playbackRate * 1.15);

  }

  useEffect(() => {
    setInterval(() => {
      if (bgAnim.getAnimation().playbackRate > 1) {

        moonAnim.getAnimation().updatePlaybackRate(moonAnim.getAnimation().playbackRate * 0.9);
        bgAnim.getAnimation().updatePlaybackRate(bgAnim.getAnimation().playbackRate * 0.9);
        wheel1Anim.getAnimation().updatePlaybackRate(wheel1Anim.getAnimation().playbackRate * 1.15);
        wheel2Anim.getAnimation().updatePlaybackRate(wheel2Anim.getAnimation().playbackRate * 1.15);

      }
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="mainBg" ref={bgAnim.ref} onClick={speedUp}>
      <div className="moon" ref={moonAnim.ref}></div>

      <div className="wheel1-top"></div>
      <div className="wheel1" ref={wheel1Anim.ref}>
        <div className="wheel-dot1"></div>
        <div className="wheel-dot2"></div>
        <div className="wheel-dot3"></div>
        <div className="wheel-dot4"></div>

      </div>
      <div className="wheel2-top"></div>
      <div className="wheel2" ref={wheel2Anim.ref}>
        <div className="wheel-dot1"></div>
        <div className="wheel-dot2"></div>
        <div className="wheel-dot3"></div>
        <div className="wheel-dot4"></div>
      </div>

    </div>
  );
}

export default App;


