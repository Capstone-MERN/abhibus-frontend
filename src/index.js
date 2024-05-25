import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Filters from "./feature/filters";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" Component={Filters} />
        <Route path="home" element={<h2>Home route</h2>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
