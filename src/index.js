import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Home from "./feature/home";
import Tours from "./feature/tours";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" Component={Home} />
        <Route
          path="bus_search/:sourceCity/:sourceCityId/:destCity/:destCityId/:travelDate"
          element={<Tours />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
