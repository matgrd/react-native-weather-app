import {
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "./SearchStyles";
import { useSearch } from "./useSearch";
import SearchResultItem from "./SearchItem/SearchResultItem";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastWeather from "../ForecastWeather/ForecastWeather";

const Search = () => {
  const { input, display, citiesData, handleOnPress, handleOnChange } =
    useSearch();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Search for city"
          value={input}
          onChange={handleOnChange}
          placeholderTextColor={"#454545"}
        />
        <ScrollView horizontal={true}>
          <FlatList
            data={citiesData}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => handleOnPress(item)}>
                  <SearchResultItem item={item} />
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
        {display && <CurrentWeather />}
        {display && <ForecastWeather />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Search;
