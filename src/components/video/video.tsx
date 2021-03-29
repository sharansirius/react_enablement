/* eslint-disable jsx-a11y/media-has-caption */
import React, { SyntheticEvent } from "react";
import styles from "./video.module.scss";

function Video({ src, classSelector }: VideoProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onVideoError = (elem: SyntheticEvent<HTMLVideoElement, Event>) => {
    // do something when the error with video URL
  };

  return (
    <div className={`${styles.videoWrapper} ${styles[classSelector]}`}>
      <video className={styles.video} onError={onVideoError} controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

interface VideoProps {
  src: string;
  classSelector: string;
}

export default Video;
