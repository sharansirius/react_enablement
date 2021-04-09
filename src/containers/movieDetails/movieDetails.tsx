import React, { ReactChild, ReactChildren } from "react";
import { useSelector } from "react-redux";
import { Heading, JumboImage, Like, LikesCount } from "../../components";
import styles from "./movieDetails.module.scss";
// import withAd from "../../components/withAd/withAd";

function MovieDetails({
  displayAd,
  adBanner,
  children,
  hasAd,
}: MovieDetailsProps) {
  // function MovieDetails({ extraInfo }: MovieDetailsProps) {
  // console.log("MovieDetails component init");
  const selectedMovie = useSelector(
    (state: CineStore) => state.movie.selectedMovie
  );

  return (
    <div className={styles.movieDetails}>
      {displayAd && hasAd ? (
        <JumboImage src={adBanner as string} />
      ) : (
        <>
          {selectedMovie && selectedMovie.title ? (
            <>
              <div className={styles.likeSection}>
                <LikesCount count={selectedMovie.likes} />
                <Like movie={selectedMovie} />
              </div>
              <JumboImage src={selectedMovie.posterurl} />
              <Heading classSelector="large" label={selectedMovie.title} />

              <p>{selectedMovie.storyline}</p>
              <p>{`Release Date : ${selectedMovie.releaseDate}`}</p>
              {selectedMovie.contentRating ? (
                <p>{`Content Rating : ${selectedMovie.contentRating}`} </p>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </>
      )}
      {children}
    </div>
  );
}

interface MovieDetailsProps {
  displayAd?: boolean;
  adBanner?: string;
  children: ReactChild | ReactChildren;
  hasAd?: boolean;
}

MovieDetails.defaultProps = {
  displayAd: false,
  adBanner: "",
  hasAd: false,
};

export default MovieDetails;
