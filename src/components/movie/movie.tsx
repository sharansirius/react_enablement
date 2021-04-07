/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useDispatch } from "react-redux";
import { Image, Like, LikesCount } from "..";
import { selectMovie } from "../../redux";
import styles from "./movie.module.scss";

function Movie({ data }: MovieProps) {
  // console.log("Movie component init");
  const dispatch = useDispatch();
  const onItemClicked = (movie: Movie) => {
    dispatch(selectMovie(movie));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.movie} onClick={() => onItemClicked(data)}>
      <Image
        src={data.posterurl}
        classSelector="medium"
        alt={data.title}
        fallbackImage="./images/no-image.png"
      />
      <div className={styles.moviesDetails}>
        <div>
          {data.title}
          <LikesCount count={data.likes} />
        </div>
        <div>
          <Like movie={data} />
        </div>
      </div>
    </div>
  );
}

interface MovieProps {
  data: Movie;
}

export default Movie;
