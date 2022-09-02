import { Text, StyleSheet, View, Image } from "react-native";
import { useEffect } from "react";

const styles = StyleSheet.create({
  title: {
    margin: 12,
    marginBottom: 0,
    fontSize: 36,
  },
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
  description: {},
  minMax: {
    color: "#757575",
  },
});

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }: any) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Text style={styles.title}>Daily</Text>
      <View>
        {data.list.splice(0, 7).map((item, index) => {
          return (
            <>
              <View style={styles.dailyItem} key={index}>
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
              </View>
            </>
          );
        })}
      </View>
    </>
  );
};

export default ForecastWeather;
