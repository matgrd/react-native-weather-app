import { X_RAPID_API_KEY } from "@env";
import { OPEN_WEATHER } from "@env";

if (!OPEN_WEATHER || !X_RAPID_API_KEY) {
  throw new Error("Provide env variables");
}

export const openWeatherKey = OPEN_WEATHER;
export const xRapidApiKey = X_RAPID_API_KEY;
