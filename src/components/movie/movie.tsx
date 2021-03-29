/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Image, Like, LikesCount } from "..";
import styles from "./movie.module.scss";

function Movie({ data, onItemClick }: MovieProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.movie} onClick={() => onItemClick(data)}>
      <Image
        src={data.posterurl}
        classSelector="medium"
        alt={data.title}
        fallbackImage="./images/no-image.png"
      />
      <div className={styles.moviesDetails}>
        <div>
          {data.title}
          <LikesCount />
        </div>
        <div>
          <Like />
        </div>
      </div>
    </div>
  );
}

interface MovieProps {
  data: Movie;
  onItemClick: (data: Movie) => void;
}

export default Movie;
