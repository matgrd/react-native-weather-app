import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks/Hooks";
import { setStatus } from "../redux/slices/geographicalCoordinatesSlice";
import { WEATHER_API_URL } from "../api";

import axios from "axios";

const styles = StyleSheet.create({
  infoView: {
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 6,
    margin: 12,
  },
  top: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
    justifyContent: "space-between",
    width: 275,
  },
  cityCountryText: {
    maxWidth: 160,
    marginTop: 15,
    fontSize: 24,
    color: "#fff",
    flexWrap: "wrap",
  },
  weatherDescription: {
    fontSize: 18,
    color: "#fff",
    marginTop: 5,
  },
  weatherIcon: {
    width: 125,
    height: 125,
  },
  bottom: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
    justifyContent: "space-between",
    width: 275,
  },
  temperature: {
    fontSize: 65,
    color: "#fff",
    letterSpacing: -5,
  },
  details: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 15,
    paddingBottom: 30,
    width: 150,
  },
  parameterRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parameterLabel: {
    color: "#fff",
    fontSize: 14,
  },
  parameterValue: {
    color: "#fff",
    fontSize: 14,
  },
});

const CurrentWeather = () => {
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

  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchCurrentWeather = () => {
    axios
      .get(
        `${api.baseUrl}weather?lat=${geographicalCoordinatesLatitude}&lon=${geographicalCoordinatesLongitude}&appid=${api.key}&units=metric`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((err) => console.dir(err))
      .finally(() => {
        dispatch(setStatus(false));
      });
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, [geographicalCoordinatesStatus]);

  let imageSource: any = "";

  if (currentWeather) {
    switch (currentWeather.weather[0].icon) {
      case "01d":
        imageSource = require("../assets/weatherIcons/01d.png");
        break;
      case "01n":
        imageSource = require("../assets/weatherIcons/01n.png");
        break;
      case "02d":
        imageSource = require("../assets/weatherIcons/02d.png");
        break;
      case "02n":
        imageSource = require("../assets/weatherIcons/02n.png");
        break;
      case "03d":
        imageSource = require("../assets/weatherIcons/03d.png");
        break;
      case "03n":
        imageSource = require("../assets/weatherIcons/03n.png");
        break;
      case "04d":
        imageSource = require("../assets/weatherIcons/04d.png");
        break;
      case "04n":
        imageSource = require("../assets/weatherIcons/04n.png");
        break;
      case "09d":
        imageSource = require("../assets/weatherIcons/09d.png");
        break;
      case "09n":
        imageSource = require("../assets/weatherIcons/09n.png");
        break;
      case "10d":
        imageSource = require("../assets/weatherIcons/10d.png");
        break;
      case "11n":
        imageSource = require("../assets/weatherIcons/11n.png");
        break;
      case "13d":
        imageSource = require("../assets/weatherIcons/13d.png");
        break;
      case "13n":
        imageSource = require("../assets/weatherIcons/13n.png");
        break;
      case "50d":
        imageSource = require("../assets/weatherIcons/50d.png");
        break;
      case "50n":
        imageSource = require("../assets/weatherIcons/50n.png");
        break;
      default:
        imageSource = require("../assets/weatherIcons/04d.png");
    }
  }

  return (
    <>
      {currentWeather && (
        <View style={styles.infoView}>
          <View style={styles.top}>
            <View>
              <Text style={styles.cityCountryText}>
                {`${currentWeather.name}, ${currentWeather.sys.country}`}
              </Text>
              <Text style={styles.weatherDescription}>
                {`${currentWeather.weather[0].description
                  .charAt(0)
                  .toUpperCase()}${currentWeather.weather[0].description.slice(
                  1
                )}`}
              </Text>
            </View>
            {imageSource !== "" ? (
              <Image style={styles.weatherIcon} source={imageSource} />
            ) : null}
          </View>
          <View style={styles.bottom}>
            <Text style={styles.temperature}>
              {`${Math.round(currentWeather.main.temp)}`}°C
            </Text>
            <View style={styles.details}>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Details:</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Feels like:</Text>
                <Text style={styles.parameterValue}>
                  {Math.round(currentWeather.main.feels_like)}°C
                </Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Wind:</Text>
                <Text style={styles.parameterValue}>
                  {currentWeather.wind.speed} m/s
                </Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Humidity:</Text>
                <Text style={styles.parameterValue}>
                  {currentWeather.main.humidity}%
                </Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Pressure:</Text>
                <Text style={styles.parameterValue}>
                  {currentWeather.main.pressure} hPa
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CurrentWeather;
