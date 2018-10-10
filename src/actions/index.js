import axios from "axios";
const API_KEY = "3e8d47d57afc0aca9d6c026fd769bca9";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// action creators always have to return an action, and actions always has to have a type property

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}