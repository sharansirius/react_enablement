import React, {
  ReactChild,
  ReactChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Heading, Video } from "..";
import { VIDEO } from "../../constants/appConstants";
import styles from "./teaser.module.scss";

function Teaser({
  src,
  type,
  poster,
  classSelector,
  displayAd,
  adBanner,
  name,
  children,
  onVideoStartOrStop,
  hasAd,
}: TeasersProps) {
  const [videoRef, setVideoRef] = useState<HTMLVideoElement>(
    {} as HTMLVideoElement
  );
  // console.log("videoRef", videoRef);
  useEffect(() => {
    if (videoRef.currentTime > 0)
      if (displayAd) videoRef.pause();
      else videoRef.play();
  }, [displayAd, videoRef]);

  const handleTimerCall = useCallback(
    (duration: number | undefined) => {
      onVideoStartOrStop(duration);
    },
    [onVideoStartOrStop]
  );

  return (
    <div className={styles.teaser}>
      <Video
        ref={useCallback(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (videoRef: HTMLVideoElement) => setVideoRef(videoRef),
          []
        )}
        src={src}
        type={type}
        poster={poster}
        classSelector={classSelector}
        onPlay={() => handleTimerCall(videoRef.currentTime)}
        onEnd={() => handleTimerCall(-1)}
        displayAd={displayAd}
        adBanner={adBanner}
        hasAd={hasAd}
      />
      <Heading label={name} classSelector={classSelector} />
      {children}
    </div>
  );
}

interface TeasersProps {
  poster?: string;
  src: string;
  type?: string;
  name: string;
  classSelector: string;
  displayAd: boolean;
  adBanner: string;
  children: ReactChild | ReactChildren;
  onVideoStartOrStop: (duration: number | undefined) => void;
  hasAd: boolean;
}

Teaser.defaultProps = {
  type: VIDEO.VIDEO_DEFAULTS.TYPE,
  poster: VIDEO.VIDEO_DEFAULTS.POSTER,
};

export default Teaser;
