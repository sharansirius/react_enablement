import React from "react";
import { MovieList, MovieDetails } from "../../containers";
import { VIDEO } from "../../constants/appConstants";
import withAdTimer from "../../hoc/withAdTimer/withAdTimer";
import { getAdConfigObject } from "../../utils/utils";
import styles from "./movies.module.scss";

function Movies() {
  // console.log("Movies page init");
  const MovieDetailsWithAd = withAdTimer(
    MovieDetails,
    getAdConfigObject(VIDEO.MOVIE_DESCRIPTION, false, true)
  );

  return (
    <div className={styles.movies}>
      <MovieList initialPage={1} />
      <MovieDetailsWithAd />
    </div>
  );
}

// interface MoviesProps {
//   Movies: string;
// }

export default React.memo(Movies);
