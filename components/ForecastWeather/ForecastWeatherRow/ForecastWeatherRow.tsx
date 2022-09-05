import { List } from "../ForecastWeatherTypes";
import { styles } from "./ForecastWeatherRowStyles";
import { useForecastWeatherRow } from "./useForecastWeatherRow";
import { Text, View, Image, TouchableOpacity } from "react-native";

const ForecastWeatherRow = ({ item, index }: { item: List; index: number }) => {
  const { forecastDays, showDetails, setShowDetails } = useForecastWeatherRow();
  return (
    <>
      <View style={styles.dailyItem}>
        <Text style={styles.day}>{forecastDays[index]}</Text>
        <Text style={styles.description}>
          {`${item.weather[0].description
            .charAt(0)
            .toUpperCase()}${item.weather[0].description.slice(1)}`}
        </Text>
        <Text style={styles.minMax}>
          {`${Math.round(item.main.temp_max)}°C / ${Math.round(
            item.main.temp_min
          )}°C`}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowDetails(!showDetails)}
        >
          <Image
            style={styles.arrowDropDownIcon}
            source={
              showDetails
                ? require("../../../assets/icons/arrow_drop_up.png")
                : require("../../../assets/icons/arrow_drop_down.png")
            }
          />
        </TouchableOpacity>
      </View>
      {showDetails && (
        <View style={styles.details}>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Pressure: </Text>
            <Text style={styles.parameterValue}>{item.main.pressure} hPa</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Humidity: </Text>
            <Text style={styles.parameterValue}>{item.main.humidity}%</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Clouds:</Text>
            <Text style={styles.parameterValue}>{item.clouds.all} %</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Wind:</Text>
            <Text style={styles.parameterValue}>{item.wind.speed} m/s</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Sea level:</Text>
            <Text style={styles.parameterValue}>{item.main.sea_level} m</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Feels like:</Text>
            <Text style={styles.parameterValue}>
              {Math.round(item.main.feels_like)}°C
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default ForecastWeatherRow;
