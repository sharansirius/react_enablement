import React from "react";
import styles from "./jumboImage.module.scss";
import { NO_IMAGE_FOUND_PATH } from "../../constants/appConstants";

function JumboImage({ src }: JumboImageProps) {
  console.log("JumboImage init");
  return (
    <img
      src={src || NO_IMAGE_FOUND_PATH}
      className={styles.jumboImage}
      alt="place"
    />
  );
}

interface JumboImageProps {
  src: string;
}

export default JumboImage;
