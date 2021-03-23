import axios from "axios";
import ENDPOINTS from "../constants/endPoints";

const checkForPrize = async (phno: number) => {
  const url =
    process.env.REACT_APP_DEV_END_POINT + ENDPOINTS.LOTTERY.PATH + phno;
  return axios(url)
    .then((response) => response)
    .catch((err) => err);
};

export default checkForPrize;
