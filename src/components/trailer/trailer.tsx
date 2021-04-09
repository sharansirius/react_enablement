import React, { MouseEvent } from "react";
import { Heading, Image, Button } from "..";
import { TRAILER_DESCRIPTION } from "../../constants/appConstants";
import styles from "./trailer.module.scss";

function Trailer({ onClick }: TrailersProps) {
  return (
    <div className={styles.content}>
      <Image
        classSelector="medium"
        src="images/sindel-background.png"
        alt="Movie"
      />
      <div className={styles.details}>
        <Heading classSelector="small" label="Sintel" />
        <p>{TRAILER_DESCRIPTION}</p>
        <Button classSelector="primary" label="Watch Now" onClick={onClick} />
      </div>
    </div>
  );
}

interface TrailersProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default Trailer;
