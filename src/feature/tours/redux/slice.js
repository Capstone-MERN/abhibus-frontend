import { createSlice } from "@reduxjs/toolkit";
import { data, layoutData } from "../dummyData";

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    tours: {
      data: data,
      // TODO: make it dynamic during api integration
      apiStatus: "success",
    },
    layouts: {
      54851: {
        apiStatus: "success",
        data: layoutData,
      },
      54852: {
        apiStatus: "success",
        data: layoutData,
      },
      54853: {
        apiStatus: "success",
        data: layoutData,
      },
    },
    selectedTour: {
      // 54851: {
      //   seats: [
      //     // { seatId: "L4", price: 1000 },
      //     // { seatId: "L5", price: 200 },
      //   ],
      //   boardingPoint: {
      //     // name: "",
      //     // description: "",
      //     // stopId: 2930,
      //   },
      //   droppingPoint: {
      //     // name: "",
      //     // description: "",
      //     // stopId: 2930,
      //   },
      // },
    },
  },
  reducers: {
    toggleBoardingPoint: (state, action) => {
      if (state.selectedTour[action.payload.tourId].boardingPoint?.stopId) {
        state.selectedTour[action.payload.tourId].boardingPoint = {};
      }
      state.selectedTour[action.payload.tourId].boardingPoint =
        action.payload.stop;
    },
    toggleDroppingPoint: (state, action) => {
      if (state.selectedTour[action.payload.tourId].droppingPoint?.stopId) {
        state.selectedTour[action.payload.tourId].droppingPoint = {};
      }
      state.selectedTour[action.payload.tourId].droppingPoint =
        action.payload.stop;
    },

    toggleSeatSelection: (state, action) => {
      const seat = action.payload.seat;

      const index = state.selectedTour[action.payload.tourId].seats.findIndex(
        (s) => s.seatNumber === seat.seatNumber
      );
      if (index !== -1) {
        state.selectedTour[action.payload.tourId].seats.splice(index, 1);
      } else {
        state.selectedTour[action.payload.tourId].seats.push(seat);
      }
    },

    setSelectedTour: (state, action) => {
      state.selectedTour[action.payload.tourId] = {
        seats: [],
        boardingPoint: {},
        droppingPoint: {},
      };
    },
    removeSeletedTour: (state, action) => {
      delete state.selectedTour[action.payload.tourId];
    },
  },
});

export const {
  toggleBoardingPoint,
  toggleDroppingPoint,
  toggleSeatSelection,
  setSelectedTour,
  removeSeletedTour,
} = toursSlice.actions;

export default toursSlice;
