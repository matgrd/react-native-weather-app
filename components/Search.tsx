import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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

  const getSearchItem = (item: City) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
        <MaterialIcons
          name={item.type === "CITY" ? "location-city" : "location-on"}
          color={"black"}
          size={30}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <Text style={{ fontWeight: "700" }}>{item.name}</Text>
          <Text style={{ fontSize: 12 }}>{item.country}</Text>
        </View>
      </View>
    );
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
            renderItem={({ item }) => (
              <Pressable onPress={() => handleOnPress(item)}>
                {getSearchItem(item)}
              </Pressable>
            )}
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
