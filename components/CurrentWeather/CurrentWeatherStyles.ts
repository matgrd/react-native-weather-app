import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    infoView: {
      alignItems: "center",
      backgroundColor: "#333",
      borderRadius: 6,
      margin: 12,
    },
    top: {
      flexDirection: "row",
      margin: 10,
      marginBottom: 0,
      justifyContent: "space-between",
      width: 275,
    },
    cityCountryText: {
      maxWidth: 160,
      marginTop: 15,
      fontSize: 24,
      color: "#fff",
      flexWrap: "wrap",
      fontFamily: "RobotoMedium",
    },
    weatherDescription: {
      fontSize: 18,
      color: "#fff",
      marginTop: 5,
      fontFamily: "RobotoRegular",
    },
    weatherIcon: {
      width: 125,
      height: 125,
    },
    bottom: {
      flexDirection: "row",
      margin: 10,
      marginBottom: 0,
      justifyContent: "space-between",
      width: 275,
    },
    temperature: {
      fontSize: 65,
      color: "#fff",
      letterSpacing: -5,
      fontFamily: "RobotoMedium",
    },
    details: {
      fontSize: 12,
      color: "#fff",
      paddingLeft: 15,
      paddingBottom: 25,
      width: 150,
    },
    parameterRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    parameterLabel: {
      color: "#fff",
      fontSize: 14,
      fontFamily: "RobotoMedium",
    },
    parameterValue: {
      color: "#fff",
      fontSize: 14,
      fontFamily: "RobotoBold",
    },
  });