import axios from "axios";
import ENDPOINTS from "../constants/endPoints";

export const getMovies = async (pageNo: number) => {
  return axios(
    process.env.REACT_APP_DEV_END_POINT + ENDPOINTS.MOVIES.PATH + pageNo
  )
    .then((response) => response)
    .catch((err) => err);
};

export const getShortTeasers = async () => {
  return axios(process.env.REACT_APP_DEV_END_POINT + ENDPOINTS.TEASERS.PATH)
    .then((response) => response)
    .catch((err) => err);
};
