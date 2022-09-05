import { styles } from "./CurrentWeatherStyles";
import { Text, View, Image } from "react-native";
import { useCurrentWeather } from "./useCurrentWeather";

const CurrentWeather = () => {
  const { currentWeather, imageSource } = useCurrentWeather();

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
              <Image style={styles.weatherIcon} source={imageSource as any} />
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
