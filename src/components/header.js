import React from "react";
import Text from "./headertext";
import Img from "./images/pictures.png";
import styles from "./component.module.css";
import useWebAnimations from "@wellyshen/use-web-animations";

function Header() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "rotate3d(0, 0, 1, 180deg)" },
      { transform: "rotate3d(0,0,1,-180deg)" },
    ],
    timing: { iterations: Infinity, duration: 30000, fill: "both" },

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
    <div className={styles.headcont}>
      <div className={styles.text}>
        <Text />
        <button className={styles.butn}>explore</button>
      </div>
      <img ref={ref} height={400} src={Img} alt="image" />
    </div>
  );
}

export default Header;
