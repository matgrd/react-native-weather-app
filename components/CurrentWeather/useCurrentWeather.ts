import axios from "axios";
import { WEATHER_API_URL } from "../../api";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "./WheaterTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import { setStatus } from "../../redux/slices/geographicalCoordinatesSlice";

export const useCurrentWeather = () => {
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

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse | null>(null);

  const fetchCurrentWeather = () => {
    axios
      .get<CurrentWeatherResponse>(
        `${WEATHER_API_URL.baseUrl}weather?lat=${geographicalCoordinatesLatitude}&lon=${geographicalCoordinatesLongitude}&appid=${WEATHER_API_URL.key}&units=metric`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch(setStatus(false));
      });
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, [geographicalCoordinatesStatus]);

  let imageSource = require("../../assets/weatherIcons/04d.png");

  if (currentWeather) {
    switch (currentWeather.weather[0].icon) {
      case "01d":
        imageSource = require("../../assets/weatherIcons/01d.png");
        break;
      case "01n":
        imageSource = require("../../assets/weatherIcons/01n.png");
        break;
      case "02d":
        imageSource = require("../../assets/weatherIcons/02d.png");
        break;
      case "02n":
        imageSource = require("../../assets/weatherIcons/02n.png");
        break;
      case "03d":
        imageSource = require("../../assets/weatherIcons/03d.png");
        break;
      case "03n":
        imageSource = require("../../assets/weatherIcons/03n.png");
        break;
      case "04d":
        imageSource = require("../../assets/weatherIcons/04d.png");
        break;
      case "04n":
        imageSource = require("../../assets/weatherIcons/04n.png");
        break;
      case "09d":
        imageSource = require("../../assets/weatherIcons/09d.png");
        break;
      case "09n":
        imageSource = require("../../assets/weatherIcons/09n.png");
        break;
      case "10d":
        imageSource = require("../../assets/weatherIcons/10d.png");
        break;
      case "11n":
        imageSource = require("../../assets/weatherIcons/11n.png");
        break;
      case "13d":
        imageSource = require("../../assets/weatherIcons/13d.png");
        break;
      case "13n":
        imageSource = require("../../assets/weatherIcons/13n.png");
        break;
      case "50d":
        imageSource = require("../../assets/weatherIcons/50d.png");
        break;
      case "50n":
        imageSource = require("../../assets/weatherIcons/50n.png");
        break;
      default:
        imageSource = require("../../assets/weatherIcons/04d.png");
    }
  }

  return {
    currentWeather,
    imageSource,
  };
};
