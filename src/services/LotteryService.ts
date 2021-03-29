import axios from "axios";
import ENDPOINTS from "../constants/endPoints";

// eslint-disable-next-line import/prefer-default-export
export const checkForPrize = async (phno: number | string) => {
  return axios(
    process.env.REACT_APP_DEV_END_POINT + ENDPOINTS.LOTTERY.PATH + phno
  )
    .then((response) => response)
    .catch((err) => err);
};
