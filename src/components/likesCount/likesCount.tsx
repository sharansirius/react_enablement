import React from "react";
import styles from "./likesCount.module.scss";

function LikesCount({ count }: LikesCountProps) {
  // console.log("LikesCount init");
  return <p className={styles.likesCount}>{count} Likes</p>;
}

interface LikesCountProps {
  count: number;
}

export default LikesCount;
