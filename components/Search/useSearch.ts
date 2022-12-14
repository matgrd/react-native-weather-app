import { City } from "./SearchTypes";
import { useState } from "react";
import { geoApiOptions, geoApiUrl } from "../../api";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import {
  setLatitude,
  setLongitude,
  setStatus,
} from "../../redux/slices/geographicalCoordinatesSlice";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export const useSearch = () => {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(false);

  const [citiesData, setCitiesData] = useState(null);

  const dispatch = useAppDispatch();

  const loadOptions = async (text: string) => {
    if (text.length > 2) {
      let response = await fetch(
        `${geoApiUrl}/cities?minPopulation=10000&namePrefix=${text}`,
        geoApiOptions
      );
      if (response) {
        const data = await response.json();
        setCitiesData(data.data);
      }
    }
  };

  const handleOnChange = ({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const { text } = nativeEvent;
    setInput(text);
    loadOptions(input);
  };

  const handleOnPress = (item: City) => {
    dispatch(setLatitude(item.latitude));
    dispatch(setLongitude(item.longitude));
    dispatch(setStatus(true));
    setCitiesData(null);
    setInput("");
    setDisplay(true);
  };

  return {
    input,
    display,
    citiesData,
    handleOnPress,
    setInput,
    handleOnChange,
  };
};
