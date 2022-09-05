import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { City } from "../types/city";

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  item: {
    marginLeft: 10,
    flexShrink: 1,
  },
  name: {
    fontFamily: "RobotoBold",
  },
  country: {
    fontSize: 12,
    fontFamily: "RobotoRegular",
  },
});

const SearchItem = ({ item }: City) => {
  return (
    <View style={styles.box}>
      <MaterialIcons
        name={item.type === "CITY" ? "location-city" : "location-on"}
        color={"black"}
        size={30}
      />
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.country}>{item.country}</Text>
      </View>
    </View>
  );
};

export default SearchItem;
