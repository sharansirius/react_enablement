import React from "react";
import styles from "./Movies.module.scss";

function Movies() {
  console.log("Movies init");
  return <div>Movies</div>;
}

interface MoviesProps {
  Movies: string;
}

export default React.memo(Movies);
