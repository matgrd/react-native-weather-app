import { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { GEO_API_URL, geoApiOptions } from "../api";
import axios from "axios";
import openWeatherKey from "../config/env";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

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

  const fetchDataHandler = useCallback(() => {}, []);

  return (
    <View style={styles.root}>
      <TextInput
        placeholder="Search for city"
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        value={input}
        placeholderTextColor={"#454545"}
        onSubmitEditing={fetchDataHandler}
      />
    </View>
  );
};

export default Search;
