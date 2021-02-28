import React from "react";
import styles from "./jumboImage.module.scss";

function JumboImage({src}:JumboImageProps) { 
  console.log("JumboImage init");
  return (
    <img src={src} className={styles.jumboImage} alt="place"/>
  );
}

interface JumboImageProps {
  src: string
}

export default JumboImage;
