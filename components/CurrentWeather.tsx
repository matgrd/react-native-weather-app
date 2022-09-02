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
  },
  details: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 15,
    paddingBottom: 30,
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
  },
  parameterValue: {
    color: "#fff",
    fontSize: 14,
  },
});

// change data type
// change imageSource type

const CurrentWeather = ({ data }: any) => {
  let imageSource: any = "";

  switch (data.weather[0].icon) {
    case "01d":
      imageSource = require("../assets/weatherIcons/01d.png");
      break;
    case "01n":
      imageSource = require("../assets/weatherIcons/01n.png");
      break;
    case "02d":
      imageSource = require("../assets/weatherIcons/02d.png");
      break;
    case "02n":
      imageSource = require("../assets/weatherIcons/02n.png");
      break;
    case "03d":
      imageSource = require("../assets/weatherIcons/03d.png");
      break;
    case "03n":
      imageSource = require("../assets/weatherIcons/03n.png");
      break;
    case "04d":
      imageSource = require("../assets/weatherIcons/04d.png");
      break;
    case "04n":
      imageSource = require("../assets/weatherIcons/04n.png");
      break;
    case "09d":
      imageSource = require("../assets/weatherIcons/09d.png");
      break;
    case "09n":
      imageSource = require("../assets/weatherIcons/09n.png");
      break;
    case "10d":
      imageSource = require("../assets/weatherIcons/10d.png");
      break;
    case "11n":
      imageSource = require("../assets/weatherIcons/11n.png");
      break;
    case "13d":
      imageSource = require("../assets/weatherIcons/13d.png");
      break;
    case "13n":
      imageSource = require("../assets/weatherIcons/13n.png");
      break;
    case "50d":
      imageSource = require("../assets/weatherIcons/50d.png");
      break;
    case "50n":
      imageSource = require("../assets/weatherIcons/50n.png");
      break;
    default:
      imageSource = require("../assets/weatherIcons/04d.png");
  }

  return (
    <View style={styles.infoView}>
      <View style={styles.top}>
        <View>
          <Text style={styles.cityCountryText}>
            {`${data.name}, ${data.sys.country}`}
          </Text>
          <Text style={styles.weatherDescription}>
            {`${data.weather[0].description
              .charAt(0)
              .toUpperCase()}${data.weather[0].description.slice(1)}`}
          </Text>
        </View>
        {imageSource !== "" ? (
          <Image style={styles.weatherIcon} source={imageSource} />
        ) : null}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.temperature}>{`${Math.round(data.main.temp)}`}°C</Text>
        <View style={styles.details}>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Details:</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Feels like:</Text>
            <Text style={styles.parameterValue}>{Math.round(data.main.feels_like)}°C</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Wind:</Text>
            <Text style={styles.parameterValue}>{data.wind.speed} m/s</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Humidity:</Text>
            <Text style={styles.parameterValue}>{data.main.humidity}%</Text>
          </View>
          <View style={styles.parameterRow}>
            <Text style={styles.parameterLabel}>Pressure:</Text>
            <Text style={styles.parameterValue}>{data.main.pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;
