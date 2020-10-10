export const Fetch = {

    get: async (url) => {
        try {
            let options = {
                method: "GET",
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'omit', // include, *same-origin, omit
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
            };
            let response = await fetch(url, options);
            if (response.status === 200) {
                let data = await response.json();
                return data;
            }
            return;
        } catch (err) {
            throw err;
        }
    }

}