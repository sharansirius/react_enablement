import React from "react";
import { Heading, Video } from "../../components";
import styles from "./nowShowing.module.scss";

function NowShowing() {
  return (
    <div className={styles.nowShowing}>
      <p className={styles.nowShowingTitle}>Now Showing</p>
      <Heading classSelector="large" label="Sintel" />
      <Video
        src="https://tympanus.net/Development/SeatPreview/media/sintel.mp4"
        classSelector="large"
      />
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </div>
  );
}

export default React.memo(NowShowing);