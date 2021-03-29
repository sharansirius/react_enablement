import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Heading, Movie } from "../../components";
import styles from "./movieList.module.scss";
import { initMovie } from "../../redux/movie/movieActions";

function MovieList({ onItemClick }: MovieListProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initMovie(pageNumber));
  });
  const movies = useSelector((state: CineStore) => state.movie.list);
  return (
    <div className={styles.moviesWrapper}>
      <Heading label="All Movies" classSelector="medium" />
      <div className={styles.movies}>
        {movies && movies.length > 0
          ? movies.map((movie: Movie) => (
              <Movie key={uuidv4()} data={movie} onItemClick={onItemClick} />
            ))
          : ""}
      </div>
    </div>
  );
}

interface MovieListProps {
  onItemClick: (data: Movie) => void;
}

export default React.memo(MovieList);
