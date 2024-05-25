import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { data, layoutData } from "../dummyData";
=======
import { BoardingStops, DroppingStops, data, layoutData } from "../dummyData";
>>>>>>> d2ec69785dd04bf350a9d1a13a2232452aed95c9

const toursSlice = createSlice({
  name: "tours",
  initialState: {
<<<<<<< HEAD
=======
    // Boarding: {
    //   /*
    //     45678:{
    //       stopId:6454,
    //       name:"bhopal Chouraha"
    //     }
    //   */
    // },
    // Dropping: {
    //   /*
    //     45678:{
    //       stopId:6454,
    //       name:"bhopal Chouraha"
    //     }
    //   */
    // },
    // BoardingStops,
    // /*
    //     BoardingStops:{
    //       tourId:[{}]
    //       tourId:[{}]
    //     }
    //   */
    // DroppingStops,
    // /*
    //     DroppingStops:{
    //       tourId:[{}]
    //       tourId:[{}]
    //     }
    //   */
    // selectedSeats: {
    //   /*
    //     tourId:[{
    //       seatNumber:"L1",
    //       price:8000
    //     }]
    //     tourId:[{
    //       seatNumber:"L1",
    //       price:8000
    //     }]

    //   */
    // },
    // priceFilter: {
    //   /*
    //     tourId: 'all' || '800' || '1500'
    //   */
    // },
>>>>>>> d2ec69785dd04bf350a9d1a13a2232452aed95c9
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
<<<<<<< HEAD
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
=======
    },
    selectedTour: {
      seats: [
        { seatId: "L4", price: 1000 },
        { seatId: "L5", price: 200 },
      ],
      boardingPoint: {
        name: "",
        description: "",
        stopId: 2930,
      },
      droppingPoint: {
        name: "",
        description: "",
        stopId: 2930,
      },
>>>>>>> d2ec69785dd04bf350a9d1a13a2232452aed95c9
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
