/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Heading, LoadMore, Movie, Skeleton } from "../../components";
import styles from "./movieList.module.scss";
import { initMovie, selectMovie } from "../../redux";

function MovieList({ initialPage }: MovieListProps) {
  // console.log("MovieList component init");

  const dispatch = useDispatch();
  const [showSkeleton, setShowSkeleton] = useState(true);
  const movies = useSelector((state: CineStore) => state.movie.list);
  const loadMore = (page: number) => {
    dispatch(initMovie(page));
  };
  useEffect(() => {
    if (movies && movies.length === 0) {
      dispatch(initMovie(initialPage));
    }
  }, []);

  useEffect(() => {
    if (movies && movies.length > 1) {
      dispatch(selectMovie(movies[0]));
      setShowSkeleton(false);
    }
  }, [movies]);
  return (
    <div className={styles.moviesWrapper}>
      <Skeleton
        show={showSkeleton}
        height={350}
        width={200}
        rows={4}
        columns={3}
      >
        <Heading label="All Movies" classSelector="medium" />
        <div className={styles.movies}>
          {movies && movies.length > 0
            ? movies.map((movie: Movie) => (
                <Movie key={uuidv4()} data={movie} />
              ))
            : ""}
        </div>
        <LoadMore
          label="Load More"
          classSelector="primary"
          onClick={loadMore}
          initialValue={2}
        />
      </Skeleton>
    </div>
  );
}

interface MovieListProps {
  initialPage: number;
}

export default React.memo(MovieList);
