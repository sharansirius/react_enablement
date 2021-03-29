import React from "react";
import styles from "./video.module.scss";

function Video() {
  // console.log("Video init");
  return <div>Sharan</div>;
}

interface VideoProps {
  Video: string;
}

export default React.memo(Video);
