import { Text, View } from "react-native";
import { styles } from "./ForecastWeatherStyles";
import { useForecastWeather } from "./useForecastWeather";
import ForecastWeatherRow from "./ForecastWeatherRow/ForecastWeatherRow";

const ForecastWeather = () => {
  const { forecastWeather } = useForecastWeather();

  return (
    <>
      {forecastWeather && (
        <>
          <Text style={styles.title}>Daily</Text>
          <View>
            {forecastWeather.list.splice(0, 7).map((item, index) => (
              <ForecastWeatherRow item={item} index={index} key={index} />
            ))}
          </View>
        </>
      )}
    </>
  );
};

export default ForecastWeather;
