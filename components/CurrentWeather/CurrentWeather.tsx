import DetailsRow from "../Common/DetailsRow";
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
              <DetailsRow
                labelText="Feels like:"
                valueText={`${Math.round(currentWeather.main.feels_like)}°C%`}
                styles={[
                  styles.parameterRow,
                  styles.parameterRow,
                  styles.parameterLabel,
                ]}
              />
              <DetailsRow
                labelText="Wind:"
                valueText={`${currentWeather.wind.speed} m/s`}
                styles={[
                  styles.parameterRow,
                  styles.parameterRow,
                  styles.parameterLabel,
                ]}
              />
              <DetailsRow
                labelText="Humidity:"
                valueText={`${currentWeather.main.humidity}%`}
                styles={[
                  styles.parameterRow,
                  styles.parameterRow,
                  styles.parameterLabel,
                ]}
              />
              <DetailsRow
                labelText="Pressure:"
                valueText={`${currentWeather.main.pressure} hPa`}
                styles={[
                  styles.parameterRow,
                  styles.parameterRow,
                  styles.parameterLabel,
                ]}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CurrentWeather;
