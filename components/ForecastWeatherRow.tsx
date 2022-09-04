import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const styles = StyleSheet.create({
  dailyItem: {
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  day: {
    fontWeight: "600",
  },
  minMax: {
    color: "#757575",
  },
  arrowDropDownIcon: {
    width: 35,
    height: 35,
  },
  details: {
    marginHorizontal: 18,
    marginVertical: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  parameterRow: {
    width: "50%",
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parameterLabel: {
    fontSize: 14,
  },
  parameterValue: {
    fontSize: 14,
    fontWeight: "600",
  },
});

const ForecastWeatherRow = ({ item, index }: any) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <View style={styles.dailyItem}>
        <Text style={styles.day}>{forecastDays[index]}</Text>
        <Text>
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
                ? require("../assets/icons/arrow_drop_up.png")
                : require("../assets/icons/arrow_drop_down.png")
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
