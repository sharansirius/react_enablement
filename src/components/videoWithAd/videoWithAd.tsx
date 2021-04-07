import React, {
  ReactChild,
  ReactChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Video, Image } from "..";
import { VIDEO } from "../../constants/appConstants";
import Heading from "../heading/heading";
import styles from "./videoWithAd.module.scss";

const VideowithAd = ({
  src,
  type,
  poster,
  classSelector,
  displayAd,
  adBanner,
  name,
  children,
  onVideoStartOrStop,
}: VideowithAdProps) => {
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
      // console.log("handleTimerCall", duration);
      onVideoStartOrStop(duration);
    },
    [onVideoStartOrStop]
  );

  return (
    <div className={styles.videowithAd}>
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
      />
      {displayAd && (
        <div className={styles[`ad_${classSelector}`]}>
          <Image classSelector={classSelector} src={adBanner} alt="AD Image" />
        </div>
      )}
      <Heading label={name} classSelector={classSelector} />
      {children}
    </div>
  );
};

interface VideowithAdProps {
  poster?: string;
  src: string;
  type?: string;
  name: string;
  classSelector: string;
  displayAd: boolean;
  adBanner: string;
  children: ReactChild | ReactChildren;
  onVideoStartOrStop: (duration: number | undefined) => void;
}

VideowithAd.defaultProps = {
  type: VIDEO.VIDEO_DEFAULTS.TYPE,
  poster: VIDEO.VIDEO_DEFAULTS.POSTER,
};

export default React.memo(VideowithAd);
