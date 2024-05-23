import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import BookingScreen from "./feature/booking";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<h2>Home route</h2>} />
        <Route path="passengerInfo" element={<BookingScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
