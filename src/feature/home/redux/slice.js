import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../../network/constants";

const initialState = {
    cities: [
        {
            id: 39033,
            name: "Hyderabad",
            state: "Telangana"
        },
        {
            id:32922,
            name:"Banglore",
            state: "Karnataka",
        },
        {
            id:38922,
            name:"Chennai",
            state: "TamilNadu",
        },
        {
            id:37933,
            name:"Goa",
            state: "Goa", 
        },
        {
            id:37955,
            name:"Vijayawada",
            state: "Andhra Pradesh", 
        },
        {
            id:38955,
            name:"Nellore",
            state: "Andhra Pradesh", 
        },
        {
            id:38923,
            name:"Jaipur",
            state: "Rajasthan", 
        },
        {
            id:37923,
            name:"Manglore",
            state: "Karnataka", 
        },
        {
            id:39923,
            name:"Visakhapatnam",
            state: "Andhra Pradesh", 
        },
        {
            id:39823,
            name:"Delhi",
            state: "Delhi", 
        },
        {
            id:39844,
            name:"Indore",
            state: "Maharashtra", 
        },
        {
            id:38854,
            name:"Kolkata",
            state: "West Bengal", 
        },
    ],
    selection: {
        sourceCity: null,
        destCity: null,
        date: null,
    },
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      updateSourceCity: (state, action) => {
        state.selection.sourceCity = action.payload;
      },
      updateDestCity: (state, action) => { 
          state.selection.destCity = action.payload;
    },
    updateCitiesApiStatus(state, action) {
        state.apiStatus = action.payload.apiStatus;
        if (action.payload.apiStatus === ApiStatus.success) {
            state.cities = action.payload.data;
        }
        },
    },
  });
  
  export const { updateSourceCity, updateDestCity, updateCitiesApiStatus } = searchSlice.actions;