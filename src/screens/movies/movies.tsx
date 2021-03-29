import React, { useState } from "react";
import { MovieDetails, MovieList } from "../../containers";
import styles from "./movies.module.scss";

function Movies() {
  const [selectedMovie, setSlectedMovie] = useState({} as Movie);
  const onItemClick = (movie: Movie) => {
    setSlectedMovie(movie);
  };

  return (
    <div className={styles.movies}>
      <MovieList onItemClick={onItemClick} />
      <MovieDetails data={selectedMovie} />
    </div>
  );
}

// interface MoviesProps {
//   Movies: string;
// }

export default React.memo(Movies);
