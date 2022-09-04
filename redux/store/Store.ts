import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { geographicalCoordinatesSlice } from "../slices/geographicalCoordinatesSlice";

const reducer = combineReducers({
  geographicalCoordinates: geographicalCoordinatesSlice.reducer,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
