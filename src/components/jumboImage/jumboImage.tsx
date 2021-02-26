import React from "react";
import styles from "./jumboImage.module.scss";

function JumboImage({src}:JumboImageProps) { 
  return (
    <img src={src} className={styles.jumboImage} alt="place"/>
  );
}

interface JumboImageProps {
  src: string
}

export default JumboImage;
