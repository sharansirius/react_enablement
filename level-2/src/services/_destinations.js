import { CONSTANTS } from "../constants/constants";
import { Fetch as _fetch } from "../utils/fetch";

export const destinationService = {

  /**
   * Function to fetch list of destinations
   * @returns All destinations
  */

  fetchAllDestinations : async () => {
    return await _fetch.get(CONSTANTS.DESTINATIONLIST);
  },
  getDetails : async (id) => {
    return await _fetch.get(CONSTANTS.DESTINATIONLIST+"/"+id);
  },
  getSimilarPlaces : async (id) => {
    return await _fetch.get(CONSTANTS.DESTINATIONLIST+"/related/"+id);
  },
  getWeather : async (id) => {
    return await _fetch.get(CONSTANTS.WEATHER_URL+id+"&appid="+CONSTANTS.WEATHER_API_KEY);
  }

};