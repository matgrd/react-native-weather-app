import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { City } from "../types/city";

const SearchItem = (item: City) => {
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

export default SearchItem;
