import React from "react";
import styles from "./component.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Pic1 from "./images/pak1.jpg";
import Pic2 from "./images/pak2.jpg";
import Pic3 from "./images/pak3.jpg";
import Pic4 from "./images/pak4.jpg";
import Pic5 from "./images/pak5.jpg";
import Pic6 from "./images/pak6.jpg";
function Pakistan() {
  return (
    <div>
      <h1 className={styles.why}> Why Pakistan </h1>
      <div className={styles.cardcont}>
        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic1} alt="image" />
          <div className={styles.center}> Gilgit </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic2} alt="image" />
          <div className={styles.center}> Swat Valley </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic3} alt="image" />
          <div className={styles.center}> Hunza Valley </div>
        </ScrollAnimation>
      </div>

      <div className={styles.cardcont}>
        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic4} alt="image" />
          <div className={styles.center}> Yarkhun Valley </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic5} alt="image" />
          <div className={styles.center}> Phander Lake </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" className={styles.pakcard}>
          <img src={Pic6} alt="image" />
          <div className={styles.center}> Fairy Meadows </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Pakistan;
