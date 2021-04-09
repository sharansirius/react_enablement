import React, { useState, useCallback } from "react";
import { AdTimer } from "../../components";

function withAdTimer(
  WrappedComponent: React.FunctionComponent<any>,
  adTimerConfig: AdTimerConfig
) {
  const WithAdTimer: React.FunctionComponent<any> = (props) => {
    const {
      adDuration,
      interval,
      adBanners,
      messages,
      forVideo,
      hasAd,
    } = adTimerConfig;
    const [displayAd, setDisplayAd] = useState(false);
    const [hideTimer, setHideTimer] = useState(forVideo);
    const handleTimeout = useCallback(() => {
      // console.log("handleTimeout");
      setDisplayAd((display) => !display);
    }, []);

    const handleVideoStartOrEnd = useCallback((duration: number) => {
      // console.log("handleVideoStartOrEnd", duration);
      if (duration === 0) setHideTimer(false);
      if (duration === -1) {
        setHideTimer(true);
        setDisplayAd(false);
      }
    }, []);

    return (
      <WrappedComponent
        displayAd={displayAd}
        adBanner={
          adBanners && adBanners[Math.floor(Math.random() * adBanners.length)]
        }
        onVideoStartOrStop={forVideo ? handleVideoStartOrEnd : undefined}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {!hideTimer && hasAd && (
          <AdTimer
            adTime={displayAd ? adDuration : interval}
            onAdEnd={handleTimeout}
            message={
              messages && (displayAd ? messages.adStart : messages.adStop)
            }
          />
        )}
      </WrappedComponent>
    );
  };

  return WithAdTimer;
}

export default withAdTimer;
