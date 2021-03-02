import styles from "./logo.module.scss";
import React from 'react-redux';

function Logo() {
  console.log("Logo init");
  return (
    <div className={`${styles.heading}`}>
      <span className={styles.part1}>Little</span>
      <span className={styles.part2}>Book</span>
    </div>
  );
}

export default Logo;
