import React from "react";
import { Image } from "..";

function JumboImage({ src }: JumboImageProps) {
  return (
    <Image
      src={src}
      classSelector="jumboImage"
      alt="movie"
      fallbackImage="./images/no-image.png"
    />
  );
}

interface JumboImageProps {
  src: string;
}

export default JumboImage;
