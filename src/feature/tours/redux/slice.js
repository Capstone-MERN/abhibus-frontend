import { createSlice } from "@reduxjs/toolkit";
import { BoardingStops, DroppingStops } from "../dummyData";

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    Boarding: {
      /*
        45678:{
          stopId:6454,
          name:"bhopal Chouraha"
        }
      */
    },
    Dropping: {
      /*
        45678:{
          stopId:6454,
          name:"bhopal Chouraha"
        }
      */
    },
    BoardingStops,
    /*
        BoardingStops:{
          tourId:[{}]
          tourId:[{}]
        }
      */
    DroppingStops,
    /*
        DroppingStops:{
          tourId:[{}]
          tourId:[{}]
        }
      */
    selectedSeats: {
      /*
        tourId:[{
          seatNumber:"L1",
          price:8000
        }]
        tourId:[{
          seatNumber:"L1",
          price:8000
        }]
        
      */
    },
    priceFilter: {
      /*
        tourId: 'all' || '800' || '1500'
      */
    },
  },
  reducers: {
    setBoarding: (state, action) => {
      state.Boarding[action.payload.tourId] = action.payload.stop || {};
    },
    removeBoarding: (state, action) => {
      delete state.Boarding[action.payload.tourId];
    },
    setDropping: (state, action) => {
      state.Dropping[action.payload.tourId] = action.payload.stop || {};
    },
    removeDropping: (state, action) => {
      delete state.Dropping[action.payload.tourId];
    },
    addSelectedSeat: (state, action) => {
      if (!state.selectedSeats[action.payload.tourId]) {
        state.selectedSeats[action.payload.tourId] = [];
      }
      state.selectedSeats[action.payload.tourId].push(
        action.payload.seatDetails
      );
    },
    removeSelectedSeat: (state, action) => {
      state.selectedSeats[action.payload.tourId] = state.selectedSeats[
        action.payload.tourId
      ].filter((seat) => seat.seatNumber !== action.payload.seatNumber);
    },
    setPriceFilter: (state, action) => {
      state.priceFilter[action.payload.tourId] = action.payload.price;
    },
  },
});

export const {
  setBoarding,
  removeBoarding,
  setDropping,
  removeDropping,
  addSelectedSeat,
  removeSelectedSeat,
  setPriceFilter,
} = toursSlice.actions;

export default toursSlice;
