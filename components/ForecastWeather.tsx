import { Text, StyleSheet, View } from "react-native";
import ForecastWeatherRow from "./ForecastWeatherRow";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/Hooks";
import { setStatus } from "../redux/slices/geographicalCoordinatesSlice";
import { WEATHER_API_URL } from "../api";
import axios from "axios";

const styles = StyleSheet.create({
  title: {
    margin: 12,
    marginBottom: 0,
    fontSize: 36,
    fontFamily: "RobotoBold",
  },
});

const ForecastWeather = () => {
  const [forecastWeather, setForecastWeather] = useState(null);

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
      .get(
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

  return (
    <>
      {forecastWeather && (
        <>
          <Text style={styles.title}>Daily</Text>
          <View>
            {forecastWeather.list.splice(0, 7).map((item: any, index: any) => (
              <ForecastWeatherRow item={item} index={index} key={index} />
            ))}
          </View>
        </>
      )}
    </>
  );
};

export default ForecastWeather;
