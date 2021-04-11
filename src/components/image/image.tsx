import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styles from "./image.module.scss";

const Image: ForwardRefExoticComponent<
  ImageProps & RefAttributes<HTMLImageElement>
> = React.forwardRef(
  ({ classSelector, src, alt, fallbackImage, onLoad }: ImageProps, ref) => {
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
            ref={ref}
            onLoad={onLoad}
          />
        ) : (
          <img
            className={`${styles.image} ${styles[classSelector]}`}
            src={src}
            alt={alt}
            onError={onError}
            ref={ref}
            onLoad={onLoad}
          />
        )}
      </>
    );
  }
);

interface ImageProps {
  classSelector: string;
  src: string;
  alt: string;
  fallbackImage?: string;
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}

Image.defaultProps = {
  fallbackImage: "",
  onLoad: () => {},
};

export default Image;
