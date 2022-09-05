import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { geoApiOptions, geoApiUrl } from "../api";
import { City } from "../types/city";
import { useAppDispatch } from "../redux/hooks/Hooks";
import {
  setLatitude,
  setLongitude,
  setStatus,
} from "../redux/slices/geographicalCoordinatesSlice";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import SearchItem from "./SearchItem";

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

  const [citiesData, setCitiesData] = useState(null);

  const dispatch = useAppDispatch();

  const loadOptions = async (text: string) => {
    setInput(text);

    if (text.length > 2) {
      let response = await fetch(
        `${geoApiUrl}/cities?minPopulation=10000&namePrefix=${text}`,
        geoApiOptions
      );
      if (response) {
        const data = await response.json();
        setCitiesData(data.data);
      }
    }
  };

  const handleOnPress = (item: City) => {
    const latitude = JSON.stringify(item.latitude);
    const longitude = JSON.stringify(item.longitude);

    dispatch(setLatitude(latitude));
    dispatch(setLongitude(longitude));
    dispatch(setStatus(true));
    setCitiesData(null);
    setInput("");
    setLoading(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Search for city"
          value={input}
          onChangeText={loadOptions}
          placeholderTextColor={"#454545"}
        />
        <ScrollView horizontal={true}>
          <FlatList
            data={citiesData}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => handleOnPress(item)}>
                  <SearchItem item={item} />
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
        {loading && <CurrentWeather />}
        {loading && <ForecastWeather />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Search;
