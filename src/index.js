import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Tours from "./feature/tours";
import Booking from "./feature/Booking";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<>Home route</>} />
        <Route
          path="bus_search/:sourceCity/:sourceCityId/:destCity/:destCityId/:travelDate"
          element={<Tours />}
        />
        <Route path="passengerInfo" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
