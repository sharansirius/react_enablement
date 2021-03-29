import { Dispatch } from "redux";
import * as _services from "../../services/MovieService";
import {
  SELECT_MOVIE,
  LIKE_MOVIE,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from "./movieTypes";

export const selectMovie = (data: Movie) => ({ type: SELECT_MOVIE, data });
export const likeMovie = (data: Movie) => ({ type: LIKE_MOVIE, data });

const fetchMoviesSuccess = (movies: Array<Movie>) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data: movies,
  };
};

const fetchMoviesFailure = (error: string) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    data: error,
  };
};
export const initMovie = (page: number) => {
  return function (dispatch: Dispatch) {
    _services
      .getMovies(page)
      .then((response) => {
        if (response && response.data && response.data.length > 0) {
          dispatch(fetchMoviesSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
