import { createSlice } from "@reduxjs/toolkit";

export const filterKeys = {
  BOARDING_POINTS: "BOARDING_POINTS",
  DROPPING_POINTS: "DROPPING_POINTS",
  BUS_PARTNER: "BUS_PARTNER",
  BUS_TYPE: "BUS_TYPE",
  DEPARTURE_TIME: "DEPARTURE_TIME",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    [filterKeys.BOARDING_POINTS]: {},
    [filterKeys.DROPPING_POINTS]: {},
    [filterKeys.BUS_PARTNER]: {},
    [filterKeys.BUS_TYPE]: {},
    [filterKeys.DEPARTURE_TIME]: {},
  },
  reducers: {
    updateStop: (state, action) => {
      const { add, stopId, identifier } = action.payload;
      if (add) {
        state[identifier][stopId] = add;
      } else {
        delete state[identifier][stopId];
      }
    },
  },
});

export const { updateStop } = filtersSlice.actions;

export default filtersSlice;
