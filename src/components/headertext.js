import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

function Headertext() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-2000px) scale(0.7)", opacity: 0.7, offset: 0 },
      { transform: "translateX(0px) scale(0.7)", opacity: 0.7, offset: 0.8 },
      { transform: "scale(1)", opacity: 1, offset: 1 }, // Go through three colors
    ],
    timing: { duration: 1500, fill: "both" },

    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    // },
    // // More useful options...
  });

  return (
    <>
      <h1 ref={ref}> Welcome To The Animation World </h1>
    </>
  );
}

export default Headertext;
