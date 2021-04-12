/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Image, Like, LikesCount, Skeleton } from "..";
import { selectMovie } from "../../redux";
import styles from "./movie.module.scss";

function Movie({ data }: MovieProps) {
  // console.log("Movie component init");
  const dispatch = useDispatch();
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [imageRef, setImageRef] = useState<HTMLImageElement>(
    {} as HTMLImageElement
  );
  const onItemClicked = (movie: Movie) => {
    dispatch(selectMovie(movie));
  };
  if (imageRef) {
    imageRef.onload = () => {
      setShowSkeleton(false);
    };
  }
  return (
    <div className={styles.movie} onClick={() => onItemClicked(data)}>
      <Skeleton show={showSkeleton}>
        <Image
          src={data.posterurl}
          classSelector="medium"
          alt={data.title}
          fallbackImage="./images/no-image.png"
          ref={(ref: HTMLImageElement) => setImageRef(ref)}
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
      </Skeleton>
    </div>
  );
}

interface MovieProps {
  data: Movie;
}

export default React.memo(Movie);

/* <>
{imageRef && imageRef.complete ? ( */

//   ) : (
//     <Skeleton rows={4} columns={3} width={240} height={240} />
//   )}
// </>
