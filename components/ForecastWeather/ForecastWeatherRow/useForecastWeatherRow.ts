import { useState } from "react";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const useForecastWeatherRow = () => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const [showDetails, setShowDetails] = useState(false);

  return {
    forecastDays,
    showDetails,
    setShowDetails,
  };
};
