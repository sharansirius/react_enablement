import React from "react";
import { MovieList } from "../../containers";
import { MovieDetailsWithAd } from "../../components";
import styles from "./movies.module.scss";

function Movies() {
  // console.log("Movies page init");
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
