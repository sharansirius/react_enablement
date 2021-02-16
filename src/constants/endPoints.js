const ENDPOINTS = {
    LOGIN: {
        path: "/login?username=",
        key2: "&password="
    },
    CITIES: {
        path: "/cities",
    },
    CITYDESCRIPTION: {
        path: "/city/",
    },
    TOURISM: {
        path: "/tourism/",
    },
    FLIGHTS: {
        path: "/flights?src=",
        key2: "&dest=",
    },
    ESTTIME: {
        path: "http://worldclockapi.com/api/json/est/now",
    }
}
export default ENDPOINTS;
