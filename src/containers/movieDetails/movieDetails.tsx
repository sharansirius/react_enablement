import React from "react";
import styles from "./movieDetails.module.scss";

function MovieDetails({ data }: MovieDetailsProps) {
  return <div className={styles.movieDetails}>{data.title}</div>;
}

interface MovieDetailsProps {
  data: Movie;
}

export default MovieDetails;
