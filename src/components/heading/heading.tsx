import React from "react";
import styles from "./heading.module.scss";

function Heading({classSelector, label}: HeadingProps) { 
  console.log("Heading init");
  return (
    <h2 className={`${styles.heading} ${styles[classSelector]}`}>{label}</h2>
  );
}

interface HeadingProps {
  classSelector: string,
  label: string
}

export default Heading;
