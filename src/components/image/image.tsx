import React, { useEffect, useState } from "react";
import styles from "./image.module.scss";

function Image({ classSelector, src, alt, fallbackImage }: ImageProps) {
  const [srcImg, setSrcImg] = useState(true);

  useEffect(() => {
    setSrcImg(true);
  }, [src]);

  const onError = () => {
    setSrcImg(false);
  };

  return (
    <>
      {!srcImg ? (
        <img
          className={`${styles.image} ${styles[classSelector]} ${styles.noImage}`}
          src={fallbackImage}
          alt={alt}
        />
      ) : (
        <img
          className={`${styles.image} ${styles[classSelector]}`}
          src={src}
          alt={alt}
          onError={onError}
        />
      )}
    </>
  );
}

interface ImageProps {
  classSelector: string;
  src: string;
  alt: string;
  fallbackImage?: string;
}

Image.defaultProps = {
  fallbackImage: "",
};

export default Image;
