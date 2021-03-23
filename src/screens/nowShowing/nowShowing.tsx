import React from "react";
import styles from "./NowShowing.module.scss";

function NowShowing() {
  console.log("NowShowing init");
  return <div>Now Showing</div>;
}

interface NowShowingProps {
  NowShowing: string;
}

export default React.memo(NowShowing);
