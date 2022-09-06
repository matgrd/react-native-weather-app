import { List } from "../ForecastWeatherTypes";
import DetailsRow from "../../Common/DetailsRow";
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
          <DetailsRow
            labelText="Pressure:"
            valueText={`${item.main.pressure} hPa`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
          <DetailsRow
            labelText="Humidity:"
            valueText={`${item.main.humidity}%`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
          <DetailsRow
            labelText="Clouds:"
            valueText={`${item.clouds.all} %`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
          <DetailsRow
            labelText="Wind:"
            valueText={`${item.wind.speed} m/s`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
          <DetailsRow
            labelText="Sea level:"
            valueText={`${item.main.sea_level} m`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
          <DetailsRow
            labelText="Feels like:"
            valueText={`${Math.round(item.main.feels_like)}°C`}
            styles={[
              styles.parameterRow,
              styles.parameterLabel,
              styles.parameterValue,
            ]}
          />
        </View>
      )}
    </>
  );
};

export default ForecastWeatherRow;
