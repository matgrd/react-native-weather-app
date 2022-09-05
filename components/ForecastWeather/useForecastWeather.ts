import axios from "axios";
import { WEATHER_API_URL } from "../../api";
import { useEffect, useState } from "react";
import { ForecastWeatherResponse } from "./ForecastWeatherTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import { setStatus } from "../../redux/slices/geographicalCoordinatesSlice";

export const useForecastWeather = () => {
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherResponse | null>(null);

  const dispatch = useAppDispatch();

  const geographicalCoordinatesLatitude = useAppSelector(
    (state) => state.geographicalCoordinates.latitude
  );
  const geographicalCoordinatesLongitude = useAppSelector(
    (state) => state.geographicalCoordinates.longitude
  );
  const geographicalCoordinatesStatus = useAppSelector(
    (state) => state.geographicalCoordinates.status
  );

  const api = WEATHER_API_URL;

  const fetchForecastWeather = () => {
    axios
      .get<ForecastWeatherResponse>(
        `${api.baseUrl}forecast?lat=${geographicalCoordinatesLatitude}&lon=${geographicalCoordinatesLongitude}&appid=${api.key}&units=metric`
      )
      .then((response) => {
        setForecastWeather(response.data);
      })
      .catch((err) => console.dir(err))
      .finally(() => {
        dispatch(setStatus(false));
      });
  };

  useEffect(() => {
    fetchForecastWeather();
  }, [geographicalCoordinatesStatus]);

  return { forecastWeather };
};
