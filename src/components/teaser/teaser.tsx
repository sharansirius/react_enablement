import React from "react";
import { Video } from "..";
import styles from "./teaser.module.scss";

function Teaser({ data }: TeaserProps) {
  // console.log("Teasers init");
  return (
    <div className={styles.teaser}>
      <Video src={data.link} classSelector="small" />
      <p>{data.name}</p>
    </div>
  );
}

interface TeaserProps {
  data: Teaser;
}

export default Teaser;
