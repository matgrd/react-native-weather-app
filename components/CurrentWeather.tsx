import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
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
  },
  weatherDescription: {
    fontSize: 18,
    color: "#fff",
    marginTop: 5,
  },
  weatherIcon: {
    width: 100,
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
  },
  details: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 15,
    paddingBottom: 15,
    width: 150,
  },
  parameterRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  parameterLabel: {
    color: "#fff",
    textAlign: "left",
  },
  parameterValue: {
    color: "#fff",
  },
});

// change data type

const CurrentWeather = ({ data }: any) => {
  return (
    <>
      {data && (
        <View style={styles.infoView}>
          <View style={styles.top}>
            <View>
              <Text style={styles.cityCountryText}>
                {`${data?.name}, ${data?.sys?.country}`}
              </Text>
              <Text style={styles.weatherDescription}>clear sky</Text>
            </View>
            <Image
              style={styles.weatherIcon}
              source={require("../assets/weatherIcons/01d.png")}
            />
          </View>
          <View style={styles.bottom}>
            <Text style={styles.temperature}>27°C</Text>
            <View style={styles.details}>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Details:</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Feels like:</Text>
                <Text style={styles.parameterValue}>22°C</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Wind:</Text>
                <Text style={styles.parameterValue}>2.06 m/s</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Humidity:</Text>
                <Text style={styles.parameterValue}>78%</Text>
              </View>
              <View style={styles.parameterRow}>
                <Text style={styles.parameterLabel}>Pressure:</Text>
                <Text style={styles.parameterValue}>1015 hPa</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CurrentWeather;
