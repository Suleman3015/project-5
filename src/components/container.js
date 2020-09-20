import React from "react";
import styles from "./component.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Container() {
  return (
    <div className={styles.maindiv}>
      <ScrollAnimation animateIn="fadeIn" className={styles.maincont}>
        <h1> Tourism </h1>
        <p>
          Tourism is travel for pleasure or business; also the theory and
          practice of touring, the business of attracting, accommodating, and
          entertaining tourists, and the business of operating tours.[2] The
          World Tourism Organization defines tourism more generally, in terms
          which go "beyond the common perception of tourism as being limited to
          holiday activity only", as people "traveling to and staying in places
          outside their usual environment for not more than one consecutive year
          for leisure and not less than 24 hours, business and other purposes
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" className={styles.maincont}>
        <h1> Tourism </h1>
        <p>
          Tourism is travel for pleasure or business; also the theory and
          practice of touring, the business of attracting, accommodating, and
          entertaining tourists, and the business of operating tours.[2] The
          World Tourism Organization defines tourism more generally, in terms
          which go "beyond the common perception of tourism as being limited to
          holiday activity only", as people "traveling to and staying in places
          outside their usual environment for not more than one consecutive year
          for leisure and not less than 24 hours, business and other purposes
        </p>
      </ScrollAnimation>
    </div>
  );
}

export default Container;
