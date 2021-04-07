import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "..";
import { updateLikes } from "../../redux";
import styles from "./like.module.scss";

function Like({ movie }: LikeProps) {
  const dispatch = useDispatch();

  return (
    <div className={styles.like}>
      <Button
        classSelector="plain_capitalize"
        onClick={() => {
          dispatch(updateLikes(movie));
        }}
        label="Like"
      />
    </div>
  );
}

interface LikeProps {
  movie: Movie;
}

export default Like;
