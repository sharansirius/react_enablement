/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SyntheticEvent,
} from "react";
import { Image } from "..";
import { VIDEO } from "../../constants/appConstants";
import styles from "./video.module.scss";

const Video: ForwardRefExoticComponent<
  VideoProps & RefAttributes<HTMLVideoElement>
> = React.forwardRef(
  (
    {
      src,
      classSelector,
      type,
      poster,
      onPlay,
      onEnd,
      displayAd,
      adBanner,
    }: VideoProps,
    ref
  ) => {
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

        {displayAd && (
          <div className={styles[`ad_${classSelector}`]}>
            <Image
              classSelector={classSelector}
              src={adBanner as string}
              alt="AD Image"
            />
          </div>
        )}
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
  displayAd?: boolean;
  adBanner?: string;
}

Video.defaultProps = {
  type: VIDEO.VIDEO_DEFAULTS.TYPE,
  poster: VIDEO.VIDEO_DEFAULTS.POSTER,
  onPlay: () => {},
  onEnd: () => {},
  displayAd: false,
  adBanner: VIDEO.VIDEO_DEFAULTS.POSTER,
};

export default Video;
