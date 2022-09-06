import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dailyItem: {
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  day: {
    fontFamily: "RobotoBold",
  },
  description: {
    fontFamily: "RobotoRegular",
  },
  minMax: {
    color: "#757575",
    fontFamily: "RobotoRegular",
  },
  arrowDropDownIcon: {
    width: 35,
    height: 35,
  },
  details: {
    marginHorizontal: 18,
    marginVertical: 6,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  parameterRow: {
    width: "50%",
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parameterLabel: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
  },
  parameterValue: {
    fontSize: 14,
    fontFamily: "RobotoBold",
  },
});
