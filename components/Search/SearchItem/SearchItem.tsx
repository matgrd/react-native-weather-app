import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { City } from "../SearchTypes";
import { styles } from "./SearchItemStyles";

const SearchItem = ({ item }: { item: City }) => {
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
