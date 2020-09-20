import React from "react";
import styles from "./component.module.css";
import Pic1 from "./images/pic1.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import useWebAnimations from "@wellyshen/use-web-animations";

function Card1() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-2000px) scale(0.7)", opacity: 0.7, offset: 0 },
      { transform: "translateX(0px) scale(0.7)", opacity: 0.7, offset: 0.8 },
      { transform: "scale(1)", opacity: 1, offset: 1 }, // Go through three colors
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
      <img src={Pic1} alt="image" />

      <p>
        Travel makes one modest. You see what a tiny place you occupy in the
        world.
      </p>
    </div>
  );
}

export default Card1;
