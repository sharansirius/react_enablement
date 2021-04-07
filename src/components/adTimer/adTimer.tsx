import React, { useEffect, useState } from "react";
import styles from "./adTimer.module.scss";

function AdTimer({ adTime, message, onAdEnd }: AdTimerProps) {
  // console.log("AdTimer init", message, adTime);
  const [timeLapse, setTimeLapse] = useState(adTime);

  // Plays the Ad
  useEffect(() => {
    const timer = setTimeout(() => {
      onAdEnd();
    }, adTime * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [adTime, onAdEnd]);

  // Updates the timer
  useEffect(() => {
    setTimeLapse(adTime);
    let remainingTime: number = adTime;
    const interval = setInterval(() => {
      setTimeLapse(remainingTime - 1);
      if (remainingTime === 0) {
        clearInterval(interval);
      }
      remainingTime -= 1;
    }, 1000);
    return () => clearInterval(interval);
  }, [adTime]);

  return (
    <div className={styles.adTimer}>
      {message || ""} {timeLapse}
    </div>
  );
}

interface AdTimerProps {
  message: string;
  adTime: number; // in seconds
  onAdEnd: () => void;
}

export default AdTimer;
