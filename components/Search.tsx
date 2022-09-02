import { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { WEATHER_API_URL } from "../api";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
  },
});

const Search = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState([]);

  const api = WEATHER_API_URL;

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `${api.baseUrl}weather?q=${input}&units=metric&appid=${api.key}`
        ),
        axios.get(
          `${api.baseUrl}forecast?q=${input}&units=metric&appid=${api.key}`
        ),
      ])
      .then((responseArr) => {
        console.log("Date created: ", responseArr[0].data);
        console.log("Date created: ", responseArr[1].data);
        setCurrentWeather(responseArr[0].data);
        setForecastWeather(responseArr[1].data);
      })
      .catch((err) => console.dir(err))
      .finally(() => {
        setInput("");
        setLoading(false);
      });
  }, [api.baseUrl, input, api.key]);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search for city"
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        placeholderTextColor={"#454545"}
        onSubmitEditing={fetchDataHandler}
      />
      {loading && (
        <View>
          <ActivityIndicator size={"large"} color="#000" />
        </View>
      )}
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </SafeAreaView>
  );
};

export default Search;
