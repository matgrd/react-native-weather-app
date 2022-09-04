import { openWeatherKey } from "./config/env";
import { xRapidApiKey } from "./config/env";

export const WEATHER_API_URL = {
  key: openWeatherKey,
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": xRapidApiKey,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";
