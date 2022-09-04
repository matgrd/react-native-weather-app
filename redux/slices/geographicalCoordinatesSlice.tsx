import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GeographicalCoordinates {
  latitude: string;
  longitude: string;
  status: boolean;
}

const initialState: GeographicalCoordinates = {
  latitude: "0",
  longitude: "0",
  status: false,
};

export const geographicalCoordinatesSlice = createSlice({
  name: "geographicalCoordinates",
  initialState,
  reducers: {
    setLatitude: (state: any, action: PayloadAction<string>) => {
      state.latitude = action.payload;
    },
    setLongitude: (state: any, action: PayloadAction<string>) => {
      state.longitude = action.payload;
    },
    setStatus: (state: any, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { setLatitude, setLongitude, setStatus } =
  geographicalCoordinatesSlice.actions;
