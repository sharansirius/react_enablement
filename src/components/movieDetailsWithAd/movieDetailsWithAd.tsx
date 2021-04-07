/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { VIDEO } from "../../constants/appConstants";
import withAdTimer from "../../hoc/withAdTimer/WithAdTimer";
import { MovieDetails } from "../../containers";

function MovieDetailsWithAd() {
  const MovieDetailsWithAdTimer = withAdTimer(MovieDetails, {
    adDuration: VIDEO.MOVIE_DESCRIPTION.AD_DURATION,
    adBanners: VIDEO.MOVIE_DESCRIPTION.AD_BANNERS,
    interval: VIDEO.MOVIE_DESCRIPTION.INTERVAL,
    forVideo: false,
    messages: {
      adStart: VIDEO.MOVIE_DESCRIPTION.AD_OFF_IN,
      adStop: VIDEO.MOVIE_DESCRIPTION.AD_ON_IN,
    },
  });
  return <MovieDetailsWithAdTimer />;
}

export default MovieDetailsWithAd;
