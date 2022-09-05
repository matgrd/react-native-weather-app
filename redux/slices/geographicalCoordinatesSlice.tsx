import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GeographicalCoordinates {
  latitude: number;
  longitude: number;
  status: boolean;
}

const initialState: GeographicalCoordinates = {
  latitude: 0,
  longitude: 0,
  status: false,
};

export const geographicalCoordinatesSlice = createSlice({
  name: "geographicalCoordinates",
  initialState,
  reducers: {
    setLatitude: (
      state: GeographicalCoordinates,
      action: PayloadAction<number>
    ) => {
      state.latitude = action.payload;
    },
    setLongitude: (
      state: GeographicalCoordinates,
      action: PayloadAction<number>
    ) => {
      state.longitude = action.payload;
    },
    setStatus: (
      state: GeographicalCoordinates,
      action: PayloadAction<boolean>
    ) => {
      state.status = action.payload;
    },
  },
});

export const { setLatitude, setLongitude, setStatus } =
  geographicalCoordinatesSlice.actions;
