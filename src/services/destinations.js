import { CONSTANTS } from "../constants/constants";

export const destinationService = {

  /**
   * Function to fetch list of destinations
   * @returns All destinations
  */

  fetchAllDestinations : async () => {
    try {
        const url = CONSTANTS.DESTINATIONLIST;
        let options = { 
            method: "GET",
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
        };    
        let response =  await fetch(url, options);
        if (response.status === 200) {
            let data = await response.json();
            return data;
        }
        return;
    } catch (err) {
      throw err;
    }
  }
};