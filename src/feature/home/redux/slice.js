import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const searchSlice = createSlice({
  name: "search",
  initialState: { cities: [], apiStatus: ApiStatus.init },
  reducers: {
    updateCitiesApiStatus(state, action) {
      state.apiStatus = action.payload.apiStatus;
      if (action.payload.apiStatus === ApiStatus.success) {
        state.cities = action.payload.data;
      }
    },
  },
});

export const { updateCitiesApiStatus } = searchSlice.actions;

export default searchSlice;
