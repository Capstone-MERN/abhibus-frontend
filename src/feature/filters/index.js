// Filters.jsx
import React from "react";
import "./styles.scss";

import DepartureTimeFilter from "./components/DepartureTimeFilter";
import SimpleFilter from "./components/SimpleFilter";
import BusTypeFilter from "./components/BusTypeFilter";
import PriceRangeFilter from "./components/PriceRangeFilter";

const busPartners = ["Orange Travels", "Verma Travels", "ABC Travels"];
const BoardingPoints = [
  "Radisson square",
  "VijayNagar Sqaure",
  "Bhanwarkuan",
  "Navlakha",
];
const droppingPoints = ["Semri", "Sohagpur", "Pipariya"];
const Filters = () => {
  return (
    <div className="filter">
      <p>Filters</p>
      <hr />
      <BusTypeFilter />
      <PriceRangeFilter />
      <DepartureTimeFilter />
      <SimpleFilter title="Bus Partner" data={busPartners} />
      <SimpleFilter title="Boarding Points" data={BoardingPoints} />
      <SimpleFilter title="Dropping Points" data={droppingPoints} />
    </div>
  );
};

export default Filters;
