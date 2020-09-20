import React from "react";
import styles from "./component.module.css";
import Pic2 from "./images/pic2.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Card2() {
  return (
    <ScrollAnimation animateIn="fadeIn" className={styles.card}>
      <img src={Pic2} alt="image" />

      <p>
        I am not the same having seen the moon shine on the other side of the
        world.
      </p>
    </ScrollAnimation>
  );
}

export default Card2;
