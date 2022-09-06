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
    ({ geographicalCoordinates }) => geographicalCoordinates.latitude
  );
  const geographicalCoordinatesLongitude = useAppSelector(
    ({ geographicalCoordinates }) => geographicalCoordinates.longitude
  );
  const geographicalCoordinatesStatus = useAppSelector(
    ({ geographicalCoordinates }) => geographicalCoordinates.status
  );

  const fetchForecastWeather = () => {
    axios
      .get<ForecastWeatherResponse>(
        `${WEATHER_API_URL.baseUrl}forecast?lat=${geographicalCoordinatesLatitude}&lon=${geographicalCoordinatesLongitude}&appid=${WEATHER_API_URL.key}&units=metric`
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
