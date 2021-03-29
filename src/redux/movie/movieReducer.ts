import {
  SELECT_MOVIE,
  LIKE_MOVIE,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
} from "./movieTypes";

const initialState = {
  list: [],
  selectedMovie: {},
};

const movie = (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case FETCH_MOVIES_FAILURE:
      return state;

    case FETCH_MOVIES_SUCCESS:
      return { ...state, ...action.data };

    case LIKE_MOVIE:
      return { ...state, ...{ isLoggedIn: false } };

    case SELECT_MOVIE:
      return { ...state, ...{ isLoggedIn: false } };

    default:
      return state;
  }
};

export default movie;
