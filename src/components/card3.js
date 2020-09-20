import React from "react";
import styles from "./component.module.css";
import Pic3 from "./images/pic3.jpg";
import "animate.css/animate.min.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function Card3() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translateX(2000px) scale(0.7)", opacity: 0.7, offset: 0 },
      { transform: "translateX(0px) scale(0.7)", opacity: 0.7, offset: 0.8 },
      { transform: "scale(1)", opacity: 1, offset: 1 },
    ],
    timing: { delay: 300, duration: 2000, fill: "both" },

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
    <div ref={ref} className={styles.card}>
      <img src={Pic3} alt="image" />

      <p> We travel not to escape life, but for life not to escape us </p>
    </div>
  );
}

export default Card3;
