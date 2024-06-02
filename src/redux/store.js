import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../feature/filters/redux/slice";
import toursSlice from "../feature/tours/redux/slice";
import { searchSlice } from "../feature/home/redux/slice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    search: searchSlice.reducer,
    tours: toursSlice.reducer,
  },
});

export default store;
