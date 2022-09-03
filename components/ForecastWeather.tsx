import { Text, StyleSheet, View } from "react-native";
import WeatherRow from "./WeatherRow";

const styles = StyleSheet.create({
  title: {
    margin: 12,
    marginBottom: 0,
    fontSize: 36,
  },
});

const ForecastWeather = ({ data }: any) => {
  return (
    <>
      <Text style={styles.title}>Daily</Text>
      <View>
        {data.list.splice(0, 7).map((item: any, index: any) => (
          <WeatherRow item={item} index={index} />
        ))}
      </View>
    </>
  );
};

export default ForecastWeather;
