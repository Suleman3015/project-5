import React from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import styles from "./component.module.css";

function Cards() {
  return (
    <div className={styles.cardcont}>
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default Cards;
