/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SyntheticEvent,
} from "react";
import { VIDEO } from "../../constants/appConstants";
import styles from "./video.module.scss";

const Video: ForwardRefExoticComponent<
  VideoProps & RefAttributes<HTMLVideoElement>
> = React.forwardRef(
  ({ src, classSelector, type, poster, onPlay, onEnd }: VideoProps, ref) => {
    const onVideoError = (elem: SyntheticEvent<HTMLVideoElement, Event>) => {
      // eslint-disable-next-line no-alert
      // console.log("Video Error", elem);
    };

    return (
      <div className={`${styles.videoWrapper} ${styles[classSelector]}`}>
        <video
          className={styles.video}
          onError={onVideoError}
          controls
          poster={poster}
          ref={ref}
          onPlay={onPlay}
          onEnded={onEnd}
        >
          <source src={src} type={type} />
        </video>
      </div>
    );
  }
);

interface VideoProps {
  src: string;
  classSelector: string;
  type?: string;
  poster?: string;
  onPlay?: () => void;
  onEnd?: () => void;
}

Video.defaultProps = {
  type: VIDEO.VIDEO_DEFAULTS.TYPE,
  poster: VIDEO.VIDEO_DEFAULTS.POSTER,
  onPlay: () => {},
  onEnd: () => {},
};

export default Video;
