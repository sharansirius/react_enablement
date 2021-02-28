import styles from "./logo.module.scss";
import React from 'react-redux';

function Logo() {
  console.log("Logo init");
  return (
    <h2 className={`${styles.heading}`}>
      <span className={styles.part1}>Little</span>
      <span className={styles.part2}>Book</span>
    </h2>
  );
}

export default Logo;
