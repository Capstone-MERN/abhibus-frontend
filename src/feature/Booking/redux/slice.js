import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import Endpoints from "../../../network/endpoints";
import axios from "axios";

const API = process.env.REACT_APP_API_URI;

export const bookTour = createAsyncThunk(
  Endpoints.book,
  async (bookingData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        `${API}${Endpoints.book}`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: "Network Error" });
      }
    }
  }
);
const initialState = JSON.parse(localStorage.getItem("booking")) ?? {
  sourceCity: null,
  destCity: null,
  service: null,
  boarding: null,
  dropping: null,
  seats: [],
  status: "init",
  error: null,
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingInfo: (state, action) => {
      const { sourceCity, destCity, service, boarding, dropping, seats } =
        action.payload;

      return {
        ...state,
        sourceCity,
        destCity,
        service,
        boarding,
        dropping,
        seats,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookTour.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(bookTour.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(bookTour.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { setBookingInfo } = bookingSlice.actions;

export default bookingSlice;
