import {
  SELECT_MOVIE,
  LIKE_MOVIE,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  UPDATE_LIKE_COUNT,
} from "./movieTypes";

const initialState = {
  list: [],
  selectedMovie: {},
};

const cloneObj = (obj: any) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    return obj;
  }
};

const movie = (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case FETCH_MOVIES_FAILURE:
      return state;

    case FETCH_MOVIES_SUCCESS: {
      const movies = action.data as Array<Movie>;
      const updatedMovies = movies.map((item) => {
        const newItem = cloneObj(item);
        newItem.likes = 0;
        return newItem;
      });
      return { ...state, ...{ list: [...updatedMovies] } };
    }

    case LIKE_MOVIE:
      return { ...state, ...{ isLoggedIn: false } };

    case SELECT_MOVIE:
      return { ...state, ...{ selectedMovie: action.data } };

    case UPDATE_LIKE_COUNT: {
      const selectedMovie = action.data as Movie;
      let selectedIndex = 0;
      let updatedSelectedMovie: Movie;
      const updatedMovies = state.list.map((item: Movie, index: number) => {
        const newItem = cloneObj(item);
        if (newItem.title === selectedMovie.title) {
          selectedIndex = index;
          newItem.likes += 1;
        }
        return newItem;
      });

      const selectedMovieFromState = state.selectedMovie as Movie;
      if (selectedMovieFromState.name === selectedMovie.name) {
        updatedSelectedMovie = updatedMovies[selectedIndex];
        return {
          ...state,
          ...{ list: [...updatedMovies] },
          ...{ selectedMovie: updatedSelectedMovie },
        };
      }
      return {
        ...state,
        ...{ list: [...updatedMovies] },
      };
    }

    default:
      return state;
  }
};

export default movie;
