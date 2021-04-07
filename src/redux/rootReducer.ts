import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import movie from "./movie/movieReducer";

const rootReducer = combineReducers({
  auth,
  movie,
});

export default rootReducer;
