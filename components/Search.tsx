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
  container: {},
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
  const [data, setData] = useState([]);

  const api = WEATHER_API_URL;

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios({
      method: "GET",
      url: `${api.baseUrl}weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.dir(error))
      .finally(() => setLoading(false));
  }, [api.baseUrl, input, api.key]);

  return (
    <SafeAreaView style={styles.container}>
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
      <CurrentWeather data={data} />
    </SafeAreaView>
  );
};

export default Search;
